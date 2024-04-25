
export default function Projects(){
    return (
        <div>
            <div>Projects</div>
            <p>I build webapps in my freetime, mostly to solve some inconvenience of mine. Here are some of them</p>
            <div className='projects'>

                    
                    <div className="card">
                        <h4>LibriCasts</h4>
                        <p>
                            Demo Link: <a href="https://libricasts.vercel.app/">https://libricasts.vercel.app/</a> 
                        </p>
                        <p>
                            Repo Link: <a href="https://github.com/adhipk/libricasts">https://github.com/adhipk/libricasts</a>
                        </p>
                        <p>A Flask + HTMX tool to parse rss feeds from LibriVox, reformats it and uploads it to PocketCasts </p>
                    </div>
                    <div className="card">
                        <h4>Send to Kindle Tool</h4> 
                        <p>
                            Demo Link: <a href="https://libgen2kindle.vercel.app/">https://libgen2kindle.vercel.app/</a>
                            </p>
                       
                        <p>
                            Repo Link: <a href="https://github.com/adhipk/libgen2kindle">https://github.com/adhipk/libgen2kindle</a>
                        </p>
                        <p>A Flask+ HTMX webapp to automate sending books from libgen to kindle devices</p>
                        <p>
                            (demo URL is linked to my kindle, feel free to send me interesting books.)
                        </p>
                    </div>
                </div>
            </div>

    );
}