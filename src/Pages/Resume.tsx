export default function Resume() {
  return (
    <div style={{ textAlign: 'left', maxWidth: '900px', margin: '0 auto', padding: '1em' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '2em', borderBottom: '2px solid #ff9500', paddingBottom: '1em' }}>
        <h1 style={{ fontSize: '2.5em', margin: '0.2em 0' }}>Adhip Kashyap</h1>
        <div style={{ fontSize: '0.95em', color: '#999' }}>
          <span>602-515-5187</span> | 
          <a href="mailto:adhip.kashyap@gmail.com" style={{ margin: '0 0.5em' }}>adhip.kashyap@gmail.com</a> | 
          <a href="https://linkedin.com/in/adhip-kashyap" target="_blank" rel="noopener noreferrer" style={{ margin: '0 0.5em' }}>LinkedIn</a> | 
          <a href="https://github.com/adhipk" target="_blank" rel="noopener noreferrer" style={{ margin: '0 0.5em' }}>GitHub</a>
        </div>
      </div>

      {/* Technical Skills */}
      <section style={{ marginBottom: '2em' }}>
        <h2 style={{ fontSize: '1.5em', color: '#ff9500', borderBottom: '1px solid #ff9500', paddingBottom: '0.3em' }}>Technical Skills</h2>
        <div style={{ marginLeft: '1em', marginTop: '1em' }}>
          <p><strong>Languages:</strong> Python, JavaScript, SQL, PHP, Java, Go, C/C++, Scala, Rust</p>
          <p><strong>Frameworks/Libraries:</strong> React, NextJs, Tailwind, D3.js, Flask, FastAPI, Apache Spark, Hadoop, Laravel, numPy, sciPy, openCV, PyTorch, TensorFlow, Hugging Face, XGBoost, pandas</p>
          <p><strong>Developer Tools:</strong> Git, Docker, Google Cloud Platform, AWS, Sentry, PostHog, Drizzle, Kubernetes, Redis, Neo4j, Vapi</p>
        </div>
      </section>

      {/* Work Experience */}
      <section style={{ marginBottom: '2em' }}>
        <h2 style={{ fontSize: '1.5em', color: '#ff9500', borderBottom: '1px solid #ff9500', paddingBottom: '0.3em' }}>Work Experience</h2>
        
        {/* Hoag Hospital */}
        <div style={{ marginTop: '1.5em' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h3 style={{ margin: '0', fontSize: '1.2em' }}>AI Software Engineer</h3>
            <span style={{ fontStyle: 'italic', color: '#999' }}>Oct 2025 -- Present</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5em' }}>
            <span style={{ fontStyle: 'italic' }}>Hoag Hospital</span>
            <span style={{ fontStyle: 'italic', color: '#999' }}>Orange County, CA</span>
          </div>
          <ul style={{ marginTop: '0.5em' }}>
            <li>Engineered production AI call center agents handling autonomous appointment booking and patient communications at scale.</li>
            <li>Architected agent configuration management system using infrastructure-as-code principles with version control and automated deployment scripts across multiple environments.</li>
            <li>Designed and implemented CI/CD pipelines enabling continuous deployment of agent updates, <strong>reducing deployment cycles by 80%</strong> and enabling rapid iteration.</li>
            <li>Built robust integrations with Epic EHR platform, enabling AI agents to autonomously manage imaging appointments while maintaining data integrity and HIPAA compliance.</li>
            <li>Developed order upload and review workflows bridging AI agents with human staff, establishing quality assurance processes and maintaining high accuracy standards.</li>
            <li>Led comprehensive compliance and adversarial testing program; engineered custom testing harnesses connected to Vapi voice platform for automated jailbreak evaluation and security assessment.</li>
            <li>Created intelligent test case generation system from phone transcripts, <strong>accelerating regression testing cycles by 60%</strong> and enabling data-driven quality metrics.</li>
          </ul>
        </div>

        {/* TechAhead */}
        <div style={{ marginTop: '1.5em' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h3 style={{ margin: '0', fontSize: '1.2em' }}>Client Solutions Architect</h3>
            <span style={{ fontStyle: 'italic', color: '#999' }}>Apr 2025 -- Sep 2025</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5em' }}>
            <span style={{ fontStyle: 'italic' }}>TechAhead</span>
            <span style={{ fontStyle: 'italic', color: '#999' }}>Thousand Oaks, CA</span>
          </div>
          <ul style={{ marginTop: '0.5em' }}>
            <li>Architect scalable backend systems and enterprise infrastructure solutions, designing high-performance systems for mission-critical applications.</li>
            <li>Develop comprehensive cost proposals and technical roadmaps translating client requirements into strategic infrastructure recommendations.</li>
            <li>Design AI integration strategies that enhance application capabilities and create measurable business value for enterprise clients.</li>
          </ul>
        </div>

        {/* Teaching Solved */}
        <div style={{ marginTop: '1.5em' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h3 style={{ margin: '0', fontSize: '1.2em' }}>Software Engineer</h3>
            <span style={{ fontStyle: 'italic', color: '#999' }}>Aug 2024 -- Oct 2024</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5em' }}>
            <span style={{ fontStyle: 'italic' }}>Teaching Solved</span>
            <span style={{ fontStyle: 'italic', color: '#999' }}>Tempe, AZ</span>
          </div>
          <ul style={{ marginTop: '0.5em' }}>
            <li>Built comprehensive full-stack web application centralizing language learning resources, <strong>improving user satisfaction by 25%</strong> and driving engagement metrics.</li>
            <li>Implemented advanced analytics instrumentation with PostHog, providing data-driven insights into user behavior and enabling product optimization that <strong>increased customer retention by 30%.</strong></li>
            <li>Engineered intelligent resource discovery system with optimized search and filtering, <strong>reducing user research time by 2+ hours weekly</strong> and improving conversion metrics.</li>
          </ul>
        </div>

        {/* InduzBuy */}
        <div style={{ marginTop: '1.5em' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h3 style={{ margin: '0', fontSize: '1.2em' }}>Software Engineering Intern</h3>
            <span style={{ fontStyle: 'italic', color: '#999' }}>May 2023 -- Aug 2023</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5em' }}>
            <span style={{ fontStyle: 'italic' }}>InduzBuy</span>
            <span style={{ fontStyle: 'italic', color: '#999' }}>Bangalore, India</span>
          </div>
          <ul style={{ marginTop: '0.5em' }}>
            <li>Engineered intelligent catalog normalization system leveraging GPT-3 and semantic similarity algorithms, achieving <strong>95% accuracy</strong> in mapping diverse supplier product formats.</li>
            <li>Led architectural migration from legacy PHP to Laravel framework, establishing modular design patterns and significantly improving codebase maintainability and test coverage.</li>
          </ul>
        </div>

        {/* ICICI Lombard */}
        <div style={{ marginTop: '1.5em' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h3 style={{ margin: '0', fontSize: '1.2em' }}>Software Engineer</h3>
            <span style={{ fontStyle: 'italic', color: '#999' }}>Oct 2019 -- Aug 2022</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5em' }}>
            <span style={{ fontStyle: 'italic' }}>ICICI Lombard</span>
            <span style={{ fontStyle: 'italic', color: '#999' }}>Bangalore, India</span>
          </div>
          <ul style={{ marginTop: '0.5em' }}>
            <li>Designed and deployed GraphDB-based decision engine using Neo4j and Python for dynamic insurance premium calculation, <strong>delivering 40% improvement</strong> in system performance for calculation-intensive workflows.</li>
            <li>Led end-to-end redesign and development of customer renewal portal, architecting mobile-first responsive interface with ReactJS, <strong>reducing checkout abandonment by 42%</strong> and driving significant revenue impact.</li>
            <li>Rapidly prototyped and launched mobile CRM application enabling remote field agent operations during COVID-19, <strong>increasing team productivity by 30%</strong> and maintaining business continuity.</li>
          </ul>
        </div>

        {/* AutoNinja */}
        <div style={{ marginTop: '1.5em' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h3 style={{ margin: '0', fontSize: '1.2em' }}>Software Engineer</h3>
            <span style={{ fontStyle: 'italic', color: '#999' }}>Jan 2019 -- Oct 2019</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5em' }}>
            <span style={{ fontStyle: 'italic' }}>AutoNinja</span>
            <span style={{ fontStyle: 'italic', color: '#999' }}>Bangalore, India</span>
          </div>
          <ul style={{ marginTop: '0.5em' }}>
            <li>Architected comprehensive error logging and monitoring infrastructure using Sentry, <strong>reducing Mean Time to Repair (MTTR) by 40%</strong> through improved observability and incident response.</li>
            <li>Engineered real-time vehicle delivery tracking system providing customers with granular status updates, improving customer experience and reducing support inquiries.</li>
          </ul>
        </div>
      </section>

      {/* Personal Projects */}
      <section style={{ marginBottom: '2em' }}>
        <h2 style={{ fontSize: '1.5em', color: '#ff9500', borderBottom: '1px solid #ff9500', paddingBottom: '0.3em' }}>Personal Projects</h2>
        
        <div style={{ marginTop: '1.5em' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h3 style={{ margin: '0', fontSize: '1.1em' }}>LibriCasts</h3>
            <span style={{ fontStyle: 'italic', color: '#999', fontSize: '0.9em' }}>Jan 2024 -- Mar 2024</span>
          </div>
          <div style={{ fontStyle: 'italic', fontSize: '0.9em', marginBottom: '0.5em' }}>Python, Flask, Github Gists, htmx</div>
          <ul style={{ marginTop: '0.5em' }}>
            <li>Developed an open-source application to parse audiobook RSS feeds from Librivox.org and integrate them into PocketCasts.</li>
            <li>Resolved broken RSS feeds and deployed corrected versions via GitHub Gists for community use.</li>
            <li>Built a lightweight front end using Flask Templates and HTMX, ensuring a seamless user experience.</li>
          </ul>
        </div>

        <div style={{ marginTop: '1.5em' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h3 style={{ margin: '0', fontSize: '1.1em' }}>Data Processing Pipeline</h3>
            <span style={{ fontStyle: 'italic', color: '#999', fontSize: '0.9em' }}>Jan 2023 -- May 2023</span>
          </div>
          <div style={{ fontStyle: 'italic', fontSize: '0.9em', marginBottom: '0.5em' }}>Scala, Kubernetes, Hadoop, Apache Spark, neo4j</div>
          <ul style={{ marginTop: '0.5em' }}>
            <li>Developed a scalable data-processing pipeline to process spatial data using open NYC taxi Dataset.</li>
            <li>Performed hot-spot analysis using k-means and pageRank algorithms.</li>
          </ul>
        </div>

        <div style={{ marginTop: '1.5em' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h3 style={{ margin: '0', fontSize: '1.1em' }}>catELMo TCR-Epitope Binding Affinity Prediction</h3>
            <span style={{ fontStyle: 'italic', color: '#999', fontSize: '0.9em' }}>2023</span>
          </div>
          <div style={{ fontStyle: 'italic', fontSize: '0.9em', marginBottom: '0.5em' }}>PyTorch, Deep Learning</div>
          <ul style={{ marginTop: '0.5em' }}>
            <li>Designed and trained a CNN to predict TCR-Epitope binding affinity using embeddings generated by catELMo, achieving <strong>90% accuracy</strong> on the test set.</li>
          </ul>
        </div>

        <div style={{ marginTop: '1.5em' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h3 style={{ margin: '0', fontSize: '1.1em' }}>LLM Science Exam</h3>
            <span style={{ fontStyle: 'italic', color: '#999', fontSize: '0.9em' }}>2023</span>
          </div>
          <div style={{ fontStyle: 'italic', fontSize: '0.9em', marginBottom: '0.5em' }}>TensorFlow, DeBerta, RAG, Cohere APIs</div>
          <ul style={{ marginTop: '0.5em' }}>
            <li>Trained a DeBerta-v2 LLM to answer STEM multiple-choice questions, implementing RAG system using Cohere APIs and TF-IDF for contextual retrieval, achieving <strong>MAP@3 score of 0.92</strong> on Kaggle competition test dataset.</li>
          </ul>
        </div>

        <div style={{ marginTop: '1.5em' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h3 style={{ margin: '0', fontSize: '1.1em' }}>Visual In-Context Learning Model</h3>
            <span style={{ fontStyle: 'italic', color: '#999', fontSize: '0.9em' }}>2023</span>
          </div>
          <div style={{ fontStyle: 'italic', fontSize: '0.9em', marginBottom: '0.5em' }}>PyTorch, Contrastive Learning</div>
          <ul style={{ marginTop: '0.5em' }}>
            <li>Implemented contrastive learning for feature extraction in Visual In-Context Learning using unsupervised and supervised retrievers, <strong>improving model accuracy by 10%</strong> over baseline on Pascal-5i dataset.</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section style={{ marginBottom: '2em' }}>
        <h2 style={{ fontSize: '1.5em', color: '#ff9500', borderBottom: '1px solid #ff9500', paddingBottom: '0.3em' }}>Education</h2>
        
        <div style={{ marginTop: '1.5em' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h3 style={{ margin: '0', fontSize: '1.2em' }}>Arizona State University</h3>
            <span style={{ fontStyle: 'italic', color: '#999' }}>Tempe, AZ</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5em' }}>
            <span style={{ fontStyle: 'italic' }}>Master's in Computer Science GPA: 3.6</span>
            <span style={{ fontStyle: 'italic', color: '#999' }}>Aug 2022 -- May 2024</span>
          </div>
          <ul style={{ marginTop: '0.5em' }}>
            <li>Relevant Coursework: Data Processing at Scale, Data Visualization, Data mining, Applied Cryptography</li>
          </ul>
        </div>

        <div style={{ marginTop: '1.5em' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h3 style={{ margin: '0', fontSize: '1.2em' }}>PES University</h3>
            <span style={{ fontStyle: 'italic', color: '#999' }}>Bangalore, India</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5em' }}>
            <span style={{ fontStyle: 'italic' }}>B.Tech Mechanical Engineering; Minor's in Computer Science GPA 7.6/10</span>
            <span style={{ fontStyle: 'italic', color: '#999' }}>Aug 2014 -- May 2018</span>
          </div>
          <ul style={{ marginTop: '0.5em' }}>
            <li>Relevant Coursework: Data Structures, Database Management, Algorithms, Operating Systems</li>
          </ul>
        </div>
      </section>

      {/* Awards */}
      <section style={{ marginBottom: '2em' }}>
        <h2 style={{ fontSize: '1.5em', color: '#ff9500', borderBottom: '1px solid #ff9500', paddingBottom: '0.3em' }}>Awards/Achievements</h2>
        <ul style={{ marginTop: '1em' }}>
          <li>STAR Intern Award 2019 - Autoninja</li>
        </ul>
      </section>
    </div>
  );
}
