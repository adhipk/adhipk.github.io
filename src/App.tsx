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
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const tabs = ['tldr', 'long_story', 'projects'];
    const currentIndex = tabs.indexOf(selected);
    
    if (e.key === 'ArrowRight' && currentIndex < tabs.length - 1) {
      handleClick(tabs[currentIndex + 1]);
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
      handleClick(tabs[currentIndex - 1]);
    }
  };

  return (
    <>
      <main role="main">
        <div className='avatar'>
          <img src={imgUrl} className='profile-pic' alt="Adhip Kashyap - AI Software Engineer at Hoag Hospital" title="Adhip Kashyap" />
        </div>
        <div>
          <h1>Adhip Kashyap</h1>
          <h2>AI Software Engineer at Hoag Hospital</h2>
          <p>Thousand Oaks, California</p>
        </div>
        <nav onKeyDown={handleKeyDown}>
          <div className='button-group' role="tablist">
          <Button 
            selected={selected == 'tldr'} 
            handleClick={()=>handleClick('tldr')}
            role="tab"
            aria-selected={selected == 'tldr'}
          >
            Overview
          </Button>
          <Button 
            selected={selected == 'long_story'} 
            handleClick={()=>handleClick('long_story')}
            role="tab"
            aria-selected={selected == 'long_story'}
          >
            Experience
          </Button>
          <Button 
            selected={selected == 'projects'} 
            handleClick={()=>handleClick('projects')}
            role="tab"
            aria-selected={selected == 'projects'}
          >
            Projects
          </Button>
          </div>
        </nav>
            
        <Page selected={selected}></Page>
      </main>
      
    </>
  )
}

export default App
