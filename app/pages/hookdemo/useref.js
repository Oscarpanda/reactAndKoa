import React, {
  useState,
  useEffect,
  useRef
} from 'react';
import ReactDOM from 'react-dom';

let input;

function Child(props, ref) {
  return (
  <>
    <input type = "text" ref = {ref}/>
  </>
  )
}
Child = React.forwardRef(Child);
export default function Parent() {
  let [number, setNumber] = useState(0);
  const inputRef = useRef();
  console.log('input===inputRef', input === inputRef);
  input = inputRef;

  function getFocus() {
    inputRef.current.focus();
  }
  return (
    <>
      <Child ref={inputRef}/>
      <button onClick = {() => setNumber({number: number + 1})} > + </button>
      <button onClick = {getFocus} > 获得焦点 </button>
    </>
  )
}