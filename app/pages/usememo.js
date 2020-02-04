import React, { useState, memo, useMemo, useCallback } from "react";
function SubConter({
  onClick, data
}) {
  console.log("SubConter render")
  return (
    <button onClick={onClick}>{data.number}</button>
  )
}
SubConter = memo(SubConter);
let oldData, oldAddClick;
export default function Counter6() {
  console.log("counter render");
  const [name, setName] = useState("计数器")
  const [number, setNumber] = useState(0);
  // const data = useMemo(() => ({number}), [number]);
  const data = useMemo(() => ({number}), []);
  console.log('data === oldData', data === oldData)
  oldData = data;
  // const addClick = () => {
  //   setNumber(number + 1)
  // }
  const addClick = useCallback(() => {
    setNumber(number + 1)
  }, [number])
  console.log('addClick===oldAddClick', addClick === oldAddClick);
  oldAddClick = addClick
  return (
    <div>
      <input type="text" value = {name} onChange= {(e) => setName(e.target.value)}></input>
      <SubConter data = {data} onClick={addClick}></SubConter>
    </div>
  )

}