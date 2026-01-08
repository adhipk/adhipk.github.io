import { useState, useEffect } from 'react';
import './Experience.css';

interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  duration: string;
  techStack?: string;
  highlights: string[];
}

const RESUME_URL = 'https://raw.githubusercontent.com/adhipk/resume-reloaded/refs/heads/main/resumes/resume.md';

const parseExperience = (markdown: string): ExperienceItem[] => {
  const experiences: ExperienceItem[] = [];
  
  // Find the Work Experience section
  const workExpMatch = markdown.match(/## Work Experience\s*([\s\S]*?)(?=\n---|\n## )/);
  if (!workExpMatch) return experiences;
  
  const workExpSection = workExpMatch[1];
  
  // Split by ### to get each job
  const jobs = workExpSection.split(/\n### /).filter(Boolean);
  
  for (const job of jobs) {
    const lines = job.trim().split('\n');
    if (lines.length === 0) continue;
    
    // First line: "Company, Location" - strip any remaining # symbols
    const headerLine = lines[0].trim().replace(/^#+\s*/, '');
    const [company, location] = headerLine.split(',').map(s => s.trim());
    
    if (!company) continue;
    
    // Find role and duration (they're in lines after the div tag)
    let role = '';
    let duration = '';
    let techStack = '';
    const highlights: string[] = [];
    
    let inDiv = false;
    let divContent: string[] = [];
    
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Track div content for role/duration
      if (line.includes('<div')) {
        inDiv = true;
        continue;
      }
      if (line.includes('</div>')) {
        inDiv = false;
        // Parse the div content - first non-empty is role, second is duration
        const meaningful = divContent.filter(l => l.trim() && !l.includes('<') && !l.includes('>'));
        if (meaningful.length >= 2) {
          role = meaningful[0].trim();
          duration = meaningful[1].trim();
        } else if (meaningful.length === 1) {
          role = meaningful[0].trim();
        }
        divContent = [];
        continue;
      }
      if (inDiv) {
        divContent.push(line);
        continue;
      }
      
      // Tech stack line (italics)
      if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('* ')) {
        techStack = line.replace(/^\*|\*$/g, '').trim();
        continue;
      }
      
      // Bullet points
      if (line.startsWith('- ') || line.startsWith('* ')) {
        highlights.push(line.substring(2).trim());
      }
    }
    
    if (company && role) {
      experiences.push({
        company,
        location: location || '',
        role,
        duration,
        techStack,
        highlights
      });
    }
  }
  
  return experiences;
};

const ExperienceCard = ({ item, index }: { item: ExperienceItem; index: number }) => {
  return (
    <div 
      className="experience-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="experience-timeline-dot" />
      <div className="experience-content">
        <div className="experience-header">
          <div className="experience-title-row">
            <h3 className="experience-company">{item.company}</h3>
            <span className="experience-duration">{item.duration}</span>
          </div>
          <p className="experience-role">{item.role}</p>
          {item.location && <span className="experience-location">{item.location}</span>}
        </div>
        {item.techStack && (
          <p className="experience-tech-stack">{item.techStack}</p>
        )}
        {item.highlights.length > 0 && (
          <ul className="experience-highlights">
            {item.highlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const [experiences, setExperiences] = useState<ExperienceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await fetch(RESUME_URL);
        if (!response.ok) {
          throw new Error('Failed to load resume');
        }
        const markdown = await response.text();
        const parsed = parseExperience(markdown);
        setExperiences(parsed);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    };

    fetchExperience();
  }, []);

  if (loading) {
    return (
      <div className="experience-loading">
        <div className="experience-loading-spinner" />
        <span>Loading experience...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="experience-error">
        <span>{error}</span>
      </div>
    );
  }

  return (
    <div className="experience-container">
      <header className="experience-section-header">
        <h2 className="experience-section-title">Experience</h2>
        <p className="experience-section-subtitle">
          Roles, impact, and a few highlights.
        </p>
      </header>

      {experiences.length === 0 ? (
        <div className="experience-empty">
          No experience entries found.
        </div>
      ) : (
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} item={exp} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function LongStory() {
  return (
    <div className="experience-wrapper">
      <ExperienceSection />
    </div>
  );
}
