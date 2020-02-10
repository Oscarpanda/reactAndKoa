function logger({getState}){
  return (next) => {
    return (action) => {
      console.log("will dispatch", action);
      const returnValue = next(action);
      console.log("state after dispatch", getState());
      return returnValue;
    }
  }
}
export default logger