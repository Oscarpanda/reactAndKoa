import React, { useState } from "react";
function  Counter2(props) {
  console.log("counter5", props);
  let [counter, setCounter]  = useState({name: "计数器", number: 0});
  return (
    <div>
      <p>{counter.number}</p>
      <button onClick={() => setCounter({...counter, number: counter.number + 1})}> + </button>
      <button onClick={() => setCounter(counter)}>setCounter</button>
    </div>
  )
}
function Counter(params) {
  return (
  <Counter2 number={3} />
  )

}
export default Counter2