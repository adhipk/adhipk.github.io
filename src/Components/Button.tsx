import '../App.css';
import '../Index.css';

export declare interface ButtonProps {
  id?: number;
  children?: React.ReactNode; // best, accepts everything React can render
  childrenElement?: JSX.Element; // A single React element
  style?: React.CSSProperties; // to pass through style props
  onChange?: React.FormEventHandler<HTMLInputElement>; // form events! the generic parameter is the type of event.target
  handleClick: () => void;
  selected: boolean;
  //  more info: https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/#wrappingmirroring
}
export default function Button(props:ButtonProps){
    return (
        <button onClick={() => props.handleClick()} className={props.selected ? 'selected':''}>
          {props.children}
        </button>
    );
}