import React, {useEffect, useState} from 'react'
export default function counter (params) {
  const [number, setNumber] = useState(0)
  let [text, setText] = useState('')
  useEffect(() => {
    console.log("start Timer");
    let timer = setInterval(() => {
      setNumber(number=> number+1)

    }, 1000);
  }, [text])

  return (
    <>
      <input value={text} onChange={(event) => setText(event.target.value)}></input>

      <p>{number}</p>
      <button> + </button>
    </>
  )
}