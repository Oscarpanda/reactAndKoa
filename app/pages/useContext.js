import React, {
  useState,
  memo,
  useMemo,
  useCallback,
  useReducer,
  createContext,
  useContext
} from 'react';
import ReactDOM from 'react-dom';

const initialState = 0;

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return {
        number: state.number + 1
      };
    default:
      break;
  }
}

const CounterContext = createContext();
// 第一种获取 CounterContext 方法：不使用 hook
function SubCounter_one() {
  return (
    <CounterContext.Consumer>
      {
        value => (
          <div>
          <p>{value.state.number}</p>
          <button onClick = {() => value.dispatch({type: "ADD"})}>+</button>
          </div>
        )
      }
    </CounterContext.Consumer>
  )
}
// 第二种获取 CounterContext 方法：使用 hook ，更简洁
function SubCounter() {
  const {
    state,
    dispatch
  } = useContext(CounterContext);
  return (
    <>
      <p>{state.number}</p>
      <button onClick = {() =>dispatch({type: "ADD"})}>+</button>

    </>
  )
}
/* class SubCounter extends React.Component{
    static contextTypes = CounterContext
    this.context =  {state, dispatch}
} */

function Counter() {
  const [state, dispatch] = useReducer((reducer), initialState, () => ({
    number: initialState
  }));
  return (
    <CounterContext.Provider value = {{state, dispatch}}>
      <SubCounter></SubCounter>
    </CounterContext.Provider>
  )
}
export default Counter;

