

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

export default function LongStory(){
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <div>
            <div style={{padding:'1em 0'}}>
                <div style={{marginBottom:'2em', padding:'2em', backgroundColor:'rgba(255,149,0,0.1)', borderRadius:'8px', border:'1px solid rgba(255,149,0,0.2)'}}>
                    <h3 style={{margin:'0 0 0.5em 0'}}>📄 Full Experience</h3>
                    <p>For my complete resume, work history, projects, and detailed achievements, visit:</p>
                    <a 
                        href="https://resume.adhipk.dev" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{
                            display:'inline-block',
                            marginTop:'1em',
                            padding:'0.75em 1.5em',
                            backgroundColor:'#ff9500',
                            color:'#fff',
                            textDecoration:'none',
                            borderRadius:'4px',
                            fontWeight:'bold',
                            transition:'background-color 0.3s'
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#e68900')}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#ff9500')}
                    >
                        📄 View Full Resume
                    </a>
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