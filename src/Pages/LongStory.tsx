import { useState, useEffect } from 'react';

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

        // Extract the content inside the <body> tag WITHOUT the external styles
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Get the body content only - no external styles
        const bodyContent = doc.body.innerHTML;

        // Use only our portfolio's CSS by wrapping in resume-content div
        setResumeHTML(bodyContent);
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
      className="resume-content"
      dangerouslySetInnerHTML={{ __html: resumeHTML }}
      style={{
        width: '100%',
        maxWidth: '100%'
      }}
    />
  );
};

export default function LongStory(){
    return (
        <div style={{width: '100%', maxWidth: '100%'}}>
            <ResumeEmbed />
        </div>
    );
}