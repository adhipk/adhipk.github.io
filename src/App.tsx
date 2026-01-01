import { useState } from 'react';
import './App.css';
import Button from './Components/Button';
import Page from './Pages/Page';
import imgUrl from '/assets/profile_pic.jpeg';
import posthog from 'posthog-js'

posthog.init('phc_woMmiIYR3KNirZeF821rJwmaXgmZ3laQnluNkjZtjKo',
    {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
    }
)
function App() {
  const [selected, setSelected] = useState('tldr');
  posthog.capture('$pageview')
  const handleClick = (selection:string)=>{

    posthog.capture("button_clicked", { name: selection })
    setSelected(selection)
  }
  const resumeUrl = "https://resume.adhipk.dev";
  return (
    <>
      <main role="main">
        <div className='avatar'>
          <img src={imgUrl} className='profile-pic' alt="Adhip Kashyap - Client Solutions Architect" title="Adhip Kashyap" />
        </div>
        <div>
          <h1>Adhip Kashyap</h1>
          <h2>Client Solutions Architect at TechAhead</h2>
          <p>Thousand Oaks, California</p>
        </div>
        <nav>
          <div className='button-group' role="tablist">
          <Button 
            selected={selected == 'tldr'} 
            handleClick={()=>handleClick('tldr')}
            role="tab"
            aria-selected={selected == 'tldr'}
          >
            TL;DR
          </Button>
          <Button 
            selected={selected == 'long_story'} 
            handleClick={()=>handleClick('long_story')}
            role="tab"
            aria-selected={selected == 'long_story'}
          >
           Long Story
          </Button>
          <Button 
            selected={selected == 'projects'} 
            handleClick={()=>handleClick('projects')}
            role="tab"
            aria-selected={selected == 'projects'}
          >
            Projects
          </Button>
            <a className='button' href={resumeUrl} onClick={()=>handleClick('resume')} title="Download full resume">Full Resume</a>
          </div>
          </nav>
            
          <Page selected={selected}></Page>
        </div>
      </main>
      
    </>
  )
}

export default App
