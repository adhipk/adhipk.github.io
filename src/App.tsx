import { useState } from 'react';
import './App.css';
import Button from './Components/Button';
import Page from './Pages/Page';
import imgUrl from '/assets/profile_pic.jpeg';
function App() {
  const [selected, setSelected] = useState(1);
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
        <Button selected={selected == 1} handleClick={()=>setSelected(1)}>
          TL;DR
        </Button>
        <Button selected={selected == 2} handleClick={()=>setSelected(2)}>
         Long Story
        </Button>
        <Button selected={selected == 3} handleClick={()=>setSelected(3)}>
          Projects
        </Button>
          <a className='button' href={resumeUrl}>Full Resume</a>
            
        <Page selected={selected}></Page>
      </div>
      
    </>
  )
}

export default App
