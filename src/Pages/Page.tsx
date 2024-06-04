import '../App.css';
import '../index.css';
import LongStory from './LongStory';
import Tldr from './Tldr';
import Projects from './Projects';

export declare interface PageProps {
  style?: React.CSSProperties; // to pass through style props
  selected: string;
}

export default function Page(props:PageProps){
    return (
      <div className='content'>
        {(props.selected == 'tldr') && (<Tldr></Tldr>)}
        {(props.selected == 'long_story') && (<LongStory></LongStory>)}
        {(props.selected == 'projects') && (<Projects></Projects>)}
        
      </div>
     
    );
}