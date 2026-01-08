export default function Projects() {
  const projects = [
    {
      name: "Downmark",
      demo: "https://downmark.fly.dev/",
      source: "https://github.com/adhipk/downmark",
      description: "Convert any webpage to clean, readable Markdown using Chrome headless and Mozilla Readability. Handles JavaScript-rendered content and removes navigation, ads, and boilerplate."
    },
    {
      name: "LibriCasts",
      demo: "https://libricasts.adhipk.dev/",
      source: "https://github.com/adhipk/libricasts",
      description: "Open-source tool that parses LibriVox RSS feeds and seamlessly integrates audiobooks into PocketCasts, enabling thousands of users to access free literature."
    },
    {
      name: "Medical Videos Chatbot",
      demo: "https://medical-videos-chatbot.vercel.app/",
      source: "https://github.com/adhipk/medical-videos-chatbot",
      description: "Interactive chatbot interface for querying and discussing medical video content. Combines video content with natural language processing capabilities."
    },
    {
      name: "Object Detection Benchmark",
      demo: "https://obj-detect-bench.vercel.app/",
      source: "https://github.com/adhipk/obj-detect-bench",
      description: "Benchmarking app for comparing CNN architectures optimized for on-device object detection. Provides hands-on performance evaluation of neural network models."
    },
    {
      name: "Chasing Squirrels",
      demo: "https://chasing-squirrels.adhipk.dev/",
      source: "https://github.com/adhipk/chasing_squirrels",
      description: "Interactive data visualization exploring patterns in Central Park squirrel sightings. Transforms raw datasets into intuitive, explorable visualizations with D3.js."
    },
    {
      name: "AudioComplete",
      source: "https://github.com/adhipk/audiocomplete",
      description: "Autocomplete system designed for voice-based input. Bridges the gap between traditional text autocomplete and voice interfaces. Built with Rust."
    },
    {
      name: "Advent of Code 2024",
      source: "https://github.com/adhipk/advent_of_code_2024",
      description: "Solutions to the 2024 Advent of Code programming challenges implemented in Rust. Demonstrates algorithmic problem-solving and idiomatic Rust patterns."
    }
  ];

  return (
    <section aria-label="Projects">
      <p>I build full-featured applications that solve real problems. Check out my <a href="https://github.com/adhipk">GitHub</a> for more.</p>
      <div className="projects">
        {projects.map((project) => (
          <article key={project.name} className="card">
            <h3>{project.name}</h3>
            <div className="links-container">
              {project.demo && <a href={project.demo}>Demo</a>}
              <a href={project.source}>Source</a>
            </div>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
