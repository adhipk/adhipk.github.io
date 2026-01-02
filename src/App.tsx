import { useState } from 'react';
import './App.css';
import Button from './Components/Button';
import Page from './Pages/Page';
import imgUrl from '/assets/profile_pic.jpeg';
import posthog from 'posthog-js'

// Initialize PostHog only once
if (typeof window !== 'undefined' && !posthog.__loaded) {
  posthog.init('phc_woMmiIYR3KNirZeF821rJwmaXgmZ3laQnluNkjZtjKo',
    {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'identified_only'
    }
  )
}

function App() {
  const [selected, setSelected] = useState('tldr');
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
      <header className='top-bar'>
        <div className='top-bar-content'>
          {selected !== 'tldr' && (
            <div className='profile-section'>
              <img src={imgUrl} className='profile-pic-small' alt="Adhip Kashyap" />
              <div className='profile-info'>
                <h1 className='name'>Adhip Kashyap</h1>
                <p className='title'>AI Software Engineer at Hoag Hospital</p>
              </div>
            </div>
          )}
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
        </div>
      </header>

      <main role="main" className='main-content'>
        {selected === 'tldr' && (
          <div className='hero-section'>
            <img src={imgUrl} className='profile-pic-large' alt="Adhip Kashyap" />
            <h1 className='hero-name'>Adhip Kashyap</h1>
            <p className='hero-title'>AI Software Engineer at Hoag Hospital</p>
          </div>
        )}
        <Page selected={selected}></Page>
      </main>
    </>
  )
}

export default App
