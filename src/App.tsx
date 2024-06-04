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
  const handleClick = (selection:string)=>{

    posthog.capture('Button Click', { property: selection })
    setSelected(selection)
  }
  const resumeUrl = "https://drive.google.com/file/d/1-NV_aNd8K12xf6vlXMFnVfye0Uaqk4qG/view?usp=drive_link"
  return (
    <>
      <div className='avatar'>
        <img src= {imgUrl} className='profile-pic'></img>
      </div>
      <h2>Adhip Kashyap</h2>
      <h3>Software Developer | CS Grad Student @ ASU</h3>
      <h3>Tempe, AZ</h3>
      <div >
        <Button selected={selected == 'tldr'} handleClick={()=>handleClick('tldr')}>
          TL;DR
        </Button>
        <Button selected={selected == 'long_story'} handleClick={()=>handleClick('long_story')}>
         Long Story
        </Button>
        <Button selected={selected == 'projects'} handleClick={()=>handleClick('projects')}>
          Projects
        </Button>
          <a className='button' href={resumeUrl} onClick={()=>handleClick('resume')}>Full Resume</a>
            
        <Page selected={selected}></Page>
      </div>
      
    </>
  )
}

export default App
