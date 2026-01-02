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
            </div>

        </div>
    );
}