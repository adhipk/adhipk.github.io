import FindMe from './FindMe';
export default function Tldr(){
    const handleContact = () => {
        window.location.href = 'mailto:adhip.kashyap@gmail.com';
    };

    return (
        <div>
        
        <div style={{marginBottom: '1.5em'}}>
            <h2 style={{marginBottom: '0.5em'}}>Hi, I'm Adhip! 👋</h2>
            <p><strong>AI Software Engineer at Hoag Hospital</strong> — building production AI systems for healthcare automation.</p>
            <p>M.S. Computer Science from Arizona State University with expertise in AI systems, backend architecture, and autonomous agent design.</p>
            <p>I specialize in building production-grade AI call center agents, designing resilient infrastructure, and architecting solutions that drive measurable business impact.</p>
        </div>

        <FindMe/>
        
        <div style={{marginTop:'2.5em', textAlign:'center'}}>
            <button 
                onClick={handleContact}
                style={{
                    padding: '0.75em 2em',
                    backgroundColor: '#ff9500',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '1em',
                    transition: 'all 0.3s',
                    boxShadow: '0 2px 8px rgba(255, 149, 0, 0.2)'
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#e68900';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 149, 0, 0.4)';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#ff9500';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(255, 149, 0, 0.2)';
                }}
                title="Send me an email"
            >
                📧 Get in Touch
            </button>
        </div>

        </div>
    );
}