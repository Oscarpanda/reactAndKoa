// reducers/home.js
const defaultState = {
  title: 'Hello Redux'
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case "INIT_HOME":
      return {title: "Hello New Route"}
    default:
      return state
  }
}