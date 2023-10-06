import '../App.css';
import '../index.css';
import LongStory from './LongStory';
import Tldr from './Tldr';
export declare interface PageProps {
  style?: React.CSSProperties; // to pass through style props
  selected: number;
}

export default function Page(props:PageProps){
    return (
      <div className='content'>
        {(props.selected == 1) && (<Tldr></Tldr>)}
        {(props.selected == 2) && (<LongStory></LongStory>)}
      </div>
     
    );
}