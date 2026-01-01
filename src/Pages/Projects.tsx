import '../App.css'

export default function Projects(){
    return (
        <section aria-label="Projects">
            <p>I build full-featured applications that solve real problems. Check out my <a href="https://github.com/adhipk">GitHub</a> for more projects</p>
            <div className='projects'>


                    <article className="card" style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
                        <h3>Downmark</h3>
                        <div className="links-container">
                            <p>
                                <a href="https://downmark.fly.dev/" title="Live demo of Downmark">Demo</a>
                            </p>
                            <p>
                                <a href="https://github.com/adhipk/downmark" title="Downmark GitHub repository">Source Code</a>
                            </p>
                        </div>
                        <p>Convert any webpage to clean, readable Markdown using Chrome headless and Mozilla Readability. Handles JavaScript-rendered content and removes navigation, ads, and boilerplate. Built with Puppeteer, React, Bun, and deployed with Docker.</p>
                    </article>

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
                        <p>Open-source tool that parses LibriVox RSS feeds and seamlessly integrates audiobooks into PocketCasts, enabling thousands of users to access free literature. Built with Flask, HTMX, and GitHub Gists for automated deployment.</p>

                    </article>

                    <article className="card" style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
                        <h3>Medical Videos Chatbot</h3>
                        <div className="links-container">
                            <p>
                                <a href="https://medical-videos-chatbot.vercel.app/" title="Live demo of Medical Videos Chatbot">Demo</a>
                            </p>
                            <p>
                                <a href="https://github.com/adhipk/medical-videos-chatbot" title="Medical Videos Chatbot GitHub repository">Source Code</a>
                            </p>
                        </div>
                        <p>Interactive chatbot interface for querying and discussing medical video content. Combines video content with natural language processing capabilities. Built with Next.js, TypeScript, and deployed on Vercel.</p>
                    </article>

                    <article className="card" style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
                        <h3>Object Detection Benchmark</h3>
                        <div className="links-container">
                            <p>
                                <a href="https://obj-detect-bench.vercel.app/" title="Live demo of Object Detection Benchmark">Demo</a>
                            </p>
                            <p>
                                <a href="https://github.com/adhipk/obj-detect-bench" title="Object Detection Benchmark GitHub repository">Source Code</a>
                            </p>
                        </div>
                        <p>Benchmarking application for comparing different CNN architectures optimized for on-device object detection. Provides hands-on performance evaluation of various neural network models in real-world scenarios. Built with Next.js and TypeScript.</p>
                    </article>

                    <article className="card" style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
                        <h3>Chasing Squirrels</h3>
                        <div className="links-container">
                            <p>
                            <a href="https://chasing-squirrels.adhipk.dev/" title="Interactive visualization of squirrel sightings in Central Park">Demo</a>
                            </p>
                            <p>
                                <a href="https://github.com/adhipk/chasing_squirrels" title="Chasing Squirrels GitHub repository">Source Code</a>
                            </p>
                        </div>
                        <p>Interactive data visualization exploring patterns in Central Park squirrel sightings. Transforms raw datasets into intuitive, explorable visualizations. Built with JavaScript, D3.js for interactive charts, and React for responsive UI components.</p>
                    </article>

                    <article className="card" style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
                        <h3>AudioComplete</h3>
                        <div className="links-container">
                            <p>
                                <a href="https://github.com/adhipk/audiocomplete" title="AudioComplete GitHub repository">Source Code</a>
                            </p>
                        </div>
                        <p>Autocomplete system designed for voice-based input. Bridges the gap between traditional text autocomplete and voice interfaces to help users complete voice commands more efficiently. Built with Rust for high performance.</p>
                    </article>

                    <article className="card" style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
                        <h3>Advent of Code 2024</h3>
                        <div className="links-container">
                            <p>
                                <a href="https://github.com/adhipk/advent_of_code_2024" title="Advent of Code 2024 GitHub repository">Source Code</a>
                            </p>
                        </div>
                        <p>Solutions to the 2024 Advent of Code programming challenges implemented in Rust. Demonstrates algorithmic problem-solving skills and idiomatic Rust programming patterns.</p>
                    </article>

                </div>
            </section>

    );
}