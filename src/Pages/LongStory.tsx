
import Button from '../Components/Button';

const resumeUrl = "https://drive.google.com/file/d/1-NV_aNd8K12xf6vlXMFnVfye0Uaqk4qG/view?usp=drive_link"
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
            <Button handleClick={()=>null} selected={false}>
                <a href={resumeUrl}>Full Resume</a>
            </Button>
            <div style={{padding:'1em 0'}}>
            I'm currently in my 3rd Semester at ASU, my classes are a mix of computer theory and interesting applications of computer science. For my coursework, I have had to build many interesting projects such as an end to end data pipeline using SQL, Apache Kafka, Kubernetes, and Neo4j.<br/>
                During the summer, I worked as a Software Developer Intern at Induzbuy - a Bengaluru-based startup that connects industrial supplies customers with distributors. My role involved writing multiple scripts that parsed customer requirements and converted them into buy orders for the suppliers. Additionally, I led the effort to refactor the core PHP codebase into Laravel, which greatly improved the code maintainability through the utilization of its MVC architecture. <br/>

                Before that, I worked as a Software Developer at ICICI Lombard, one of the largest insurance companies in India. In this role, I led a team of four developers in a major overhaul of the customer portal, resulting in a simplified, mobile-first design built with ReactJS. I also developed a rule engine based on GraphDB using neo4j and Python, which helped in computing key components of the insurance premium.
                <h3>Tech I've worked with</h3>
                <div className='list-container'>
                <TechList/>
            </div>
           
            <div className="list-container">
                <div > 
                    <p>Some Courses I've Completed</p>
                    <ul>
                        <li>Combinatorial Algorithms and Intractability</li>
                        <li>Applied Cryptography</li>
                        <li>Perception in Robotics</li>
                    </ul>
                </div>
                <div >
                    <p>I'm Currently Taking</p>
                    <ul >
                        <li>Algorithms in Computation Bio</li>
                        <li>Data Mining</li>
                        <li>Engineering Blockchain Applications.</li>
                    </ul>
                    
                </div>
                
            </div>
            </div>
            
            
            
        </div>
    );
}