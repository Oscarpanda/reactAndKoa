import React, { useState } from "react";
function Parent () {
  let [num, setNum] = useState(0);
  let [text, setText] = useState(1);
  return (
    <div>
      <Child1 num = {num} handleClick = {setNum} />
      <Child2  text= {text} handleClick = {setText} />
    </div>
  )
}
function Child1(props) {
  console.log("Child1", props);
  const { num, handleClick } = props;
  return (
    <div onClick={
      () => {handleClick(num+1)}
    }
    >
      child {num}
    </div>
  )
}
function Child2(props) {
  console.log("Child2", props);
  const { text, handleClick } = props;
  return (
    <div >
      Child2
      <Grandson text={text} handleClick={handleClick} />
    </div>
  )
}
function Grandson(props) {
  console.log("Grandson", props);
  const { text, handleClick } = props;
  return (
    <div onClick={
      () => {handleClick(text +1)}
    }
    >
      grandson{text}
    </div>
  )
}

export default Parent;