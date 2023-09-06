import Button from '../Components/Button';
import resumeUrl from '../assets/resume.pdf';
export default function LongStory(){
    return (
        <div>
            <div>
            I'm currently in my 3rd Semester at ASU, my classes are a mix of computer theory and interesting applications of computer science. For my coursework, I have had to build many interesting projects such as an end-end data pipeline in Apache Kafka, Kubernetes, and Neo4j.<br/>
                During the summer, I worked as a Software Developer Intern at Induzbuy - a Bengaluru-based startup that connects industrial supplies customers with distributors. My role involved writing multiple scripts that parsed customer requirements and converted them into buy orders for the suppliers. Additionally, I led the effort to refactor the core PHP codebase into Laravel, which greatly improved the code maintainability through the utilization of its MVC architecture. <br/>

                Before that, I worked as a Software Developer at ICICI Lombard, one of the largest insurance companies in India. In this role, I led a team of four developers in a major overhaul of the customer portal, resulting in a simplified, mobile-first design built with ReactJS. I also developed a rule engine based on GraphDB using neo4j and Python, which helped in computing key components of the insurance premium.
                <h3>Tech I've worked with</h3>
                <div className='list-container'>
                <ul className='techs'>
                    <li>python</li>
                    <li>PHP</li>
                    <li>JavaScript</li>
                    <li>nodeJS</li>
                    <li>SQL</li>
                    <li>Java</li>
                    <li>Apache Kafka</li>
                    <li>Kubernetes</li>
                    <li>C</li>
                    <li>C++</li>
                    <li>Laravel/Lumen</li>
                    <li>ReactJS + Redux</li>
                    <li>AngularJS</li>
                    <li>AWS</li>
                    <li>neo4j</li>
                    <li>Docker</li>
                    <li>Sentry</li>
                    <li>ElasticSearch</li>
                </ul>
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
            
            <Button handleClick={()=>null} selected={false}>
                <a href={resumeUrl}>Full Resume</a>
            </Button>
            
        </div>
    );
}