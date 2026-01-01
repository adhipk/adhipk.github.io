



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
                  At TechAhead, I architect scalable backend solutions and design AI integration strategies for enterprise clients. I translate complex technical requirements into comprehensive cost proposals and actionable infrastructure recommendations that drive competitive advantage.
                </p>
                <p>
                  At Hoag Hospital, I engineered production AI call center agents handling autonomous appointment booking. I architected agent configuration management with infrastructure-as-code practices and built deployment automation reducing deployment times by 80%. I developed robust integrations with Epic EHR enabling autonomous imaging appointment management, while building automated compliance testing harnesses that connect to Vapi. I also created intelligent test case generation from transcripts, accelerating regression testing cycles by 60%.
                </p>
                <p>
                  At Induzbuy, I developed intelligent parsing systems leveraging GPT-3 and similarity metrics to normalize supplier catalogs with 95% accuracy. I spearheaded the architectural migration from legacy PHP to Laravel, establishing modular design patterns that significantly improved system maintainability.
                </p>
                <p>
                  At ICICI Lombard (3 years), I designed and led a high-impact customer portal overhaul, implementing a mobile-first architecture with ReactJS that drove a 42% reduction in checkout abandonment. I engineered a GraphDB-based rule engine in Neo4j and Python for dynamic premium computation, delivering 40% performance improvements in critical insurance calculation workflows.
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