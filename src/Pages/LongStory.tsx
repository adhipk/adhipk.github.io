

import { useState, useEffect } from 'react';

const TechList = () => {
  const techList = [
    'Python',
    'PHP',
    'JavaScript/TypeScript',
    'nodeJS',
    'SQL',
    'Java',
    'Apache Kafka',
    'Kubernetes',
    'C',
    'C++',
    'Laravel/Lumen',
    'ReactJS + Redux',
    'AngularJS',
    'AWS',
    'neo4j',
    'Docker',
    'Sentry',
    'ElasticSearch',
  ];

  const techAbbreviations: { [key: string]: string } = {
    Python: 'PY',
    PHP: 'PHP',
    'JavaScript/TypeScript': 'JS/TS',
    nodeJS: 'NodeJS',
    SQL: 'SQL',
    Java: 'Java',
    'Apache Kafka': 'Kafka',
    Kubernetes: 'K8s',
    C: 'C',
    'C++': 'C++',
    'Laravel/Lumen': 'Laravel/Lumen',
    'ReactJS + Redux': 'React + Redux',
    AngularJS: 'AngularJS',
    AWS: 'AWS',
    neo4j: 'Neo4j',
    Docker: 'Docker',
    Sentry: 'Sentry',
    ElasticSearch: 'ElasticSearch',
  };

  const [showFullNames, setShowFullNames] = useState(true);

  const handleResize = () => {
    setShowFullNames(window.innerWidth > 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderTechList = () => {
    return (
      <ul className='techs'>
        {techList.map((tech) => (
          <li key={tech}>
            {showFullNames ? tech : techAbbreviations[tech]}
          </li>
        ))}
      </ul>
    );
  };

  return <div>{renderTechList()}</div>;
};

const ResumeEmbed = () => {
  const [resumeHTML, setResumeHTML] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await fetch('https://resume.adhipk.dev');
        if (!response.ok) {
          throw new Error('Failed to load resume');
        }
        const html = await response.text();

        // Extract the content inside the <body> tag and the styles
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Get all style tags and link tags for CSS
        const styles = Array.from(doc.querySelectorAll('style, link[rel="stylesheet"]'))
          .map(el => el.outerHTML)
          .join('\n');

        // Get the body content
        const bodyContent = doc.body.innerHTML;

        // Combine styles and content
        setResumeHTML(`${styles}\n<div class="resume-content">${bodyContent}</div>`);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    };

    fetchResume();
  }, []);

  if (loading) {
    return (
      <div style={{
        padding: '2em',
        textAlign: 'center',
        color: '#ff9500'
      }}>
        Loading resume...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        padding: '2em',
        textAlign: 'center',
        color: '#fb4934'
      }}>
        Error loading resume: {error}
      </div>
    );
  }

  return (
    <div
      dangerouslySetInnerHTML={{ __html: resumeHTML }}
      style={{
        width: '100%',
        maxWidth: '100%'
      }}
    />
  );
};

export default function LongStory(){
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <div>
            <div style={{padding:'1em 0'}}>
                <div style={{
                    marginBottom:'2em',
                    padding:'2em',
                    backgroundColor:'rgba(255,149,0,0.05)',
                    borderRadius:'8px',
                    border:'1px solid rgba(255,149,0,0.2)'
                }}>
                    <ResumeEmbed />
                </div>

                <h3>Tech I've worked with</h3>
                <div className='list-container'>
                <TechList/>
            </div>

            <div className="list-container">
                <div className='flex'>
                    <h3>Some Courses I've Completed</h3>
                    <ul>
                        <li>Combinatorial Algorithms and Intractability</li>
                        <li>Applied Cryptography</li>
                        <li>Perception in Robotics</li>
                        <li>Algorithms in Computation Bio</li>
                        <li>Data Mining</li>
                        <li>Data Vizualization</li>
                    </ul>
                </div>
            </div>
            </div>

            <button
                onClick={scrollToTop}
                style={{
                    marginTop:'2em',
                    padding:'0.5em 1em',
                    backgroundColor:'rgba(255,149,0,0.2)',
                    border:'1px solid #ff9500',
                    color:'#ff9500',
                    borderRadius:'4px',
                    cursor:'pointer',
                    fontWeight:'bold',
                    transition:'all 0.3s'
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#ff9500';
                    e.currentTarget.style.color = '#fff';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,149,0,0.2)';
                    e.currentTarget.style.color = '#ff9500';
                }}
                title="Scroll back to top"
            >
                ⬆️ Back to Top
            </button>

        </div>
    );
}