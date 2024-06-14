import '../App.css'

export default function Projects(){
    return (
        <div>

            <p>I build webapps in my freetime, Here are some of them. Check out my github for more</p>
            <div className='projects'>

                    
                    <div className="card" style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
                        <h4>LibriCasts</h4>
                        <div className="links-container">
                            <p>
                                <a href="https://libricasts.adhipk.dev/">Demo</a> 
                            </p>
                            <p>
                                <a href="https://github.com/adhipk/libricasts">Source Code</a>
                            </p>
                           
                        </div>
                        <p>A Flask + HTMX tool to parse rss feeds from LibriVox, reformats it and uploads it to PocketCasts </p>
                        
                    </div>
                    <div className="card" style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
                        <h4>Chasing Squirrels</h4>
                        <div className="links-container">
                            <p>
                            <a href="https://chasing-squirrels.adhipk.dev/">Demo</a> 
                            </p>
                            <p>
                                <a href="https://github.com/adhipk/chasing_squirrels">Repo</a>
                            </p>
                        </div>
                        <p>An Interactive Visualization of squirrel sightings in Central Park. Built using JS and d3</p>
                    </div>
                    
                </div>
            </div>

    );
}