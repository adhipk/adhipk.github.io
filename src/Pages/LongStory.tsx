



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
    setShowFullNames(window.innerWidth > 768); // Change 768 to your desired breakpoint
  };

  useEffect(() => {
    handleResize(); // Set the initial state
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
    
    return (
        <div>

            <div style={{padding:'1em 0'}}>
                <p>
                  I recently graduated from ASU with a Master's in Computer Science. For my coursework, I have had to build many interesting projects such as an end to end data processing pipeline using SQL, Apache Kafka, Kubernetes, and Neo4j.
                </p>
                <p>
                  Last Summer, I interned at Induzbuy - a Bengaluru based startup that connects industrial supplies customers with distributors. My role involved writing scripts to parse customer requirements and process the data into buy orders for the suppliers. Additionally, I led the refactoring of the PHP codebase to Laravel, which greatly improved the maintainability.
                </p>
                <p>
                  Before that, I worked as a Software Developer at ICICI Lombard, one of the largest insurance companies in India for 3 years. In this role, I led a team of four developers in a major overhaul of the customer portal, resulting in a simplified, mobile-first design built with ReactJS. I also developed a graphDB based rule engine using neo4j and Python, which helped in computing key components of the insurance premium.
                </p>
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
            
            
            
        </div>
    );
}