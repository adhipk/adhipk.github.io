import '../App.css'

export default function Projects(){
    return (
        <section aria-label="Projects">
            <p>I build full-featured applications that solve real problems. Check out my <a href="https://github.com/adhipk">GitHub</a> for more projects</p>
            <div className='projects'>

                    
                    <article className="card" style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
                        <h3>LibriCasts</h3>
                        <div className="links-container">
                            <p>
                                <a href="https://libricasts.adhipk.dev/" title="Live demo of LibriCasts">Demo</a> 
                            </p>
                            <p>
                                <a href="https://github.com/adhipk/libricasts" title="LibriCasts GitHub repository">Source Code</a>
                            </p>
                           
                        </div>
                        <p>Open-source tool that parses LibriVox RSS feeds and seamlessly integrates audiobooks into PocketCasts, enabling thousands of users to access free literature</p>
                        
                    </article>
                    <article className="card" style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
                        <h3>Chasing Squirrels</h3>
                        <div className="links-container">
                            <p>
                            <a href="https://chasing-squirrels.adhipk.dev/" title="Interactive visualization of squirrel sightings in Central Park">Demo</a> 
                            </p>
                            <p>
                                <a href="https://github.com/adhipk/chasing_squirrels" title="Chasing Squirrels GitHub repository">Repo</a>
                            </p>
                        </div>
                        <p>Interactive data visualization exploring patterns in Central Park squirrel sightings using JavaScript and D3.js. Demonstrates ability to transform raw datasets into intuitive, explorable visualizations</p>
                    </article>
                    
                </div>
            </section>

    );
}