import React from "react";
class bindThis extends  React.Component{
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
      title: "react study"
    }
    this.handleClick2 = this.handleClick1.bind(this)
  }
  handleClick1() {
    console.log("handleClick1");
    this.setState({
      num: this.state.num + 1,
    })
  }
  handleClick3() {
    console.log("handleClick3");
    return () => {
      this.setState({
        num: this.state.num + 1,
      })
    }
  }
  handleClick3() {
    console.log("handleClick3");
    return () => {
      this.setState({
        num: this.state.num + 1,
      })
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.num}</h2>
        <button onClick = {this.handleClick2}>btn1</button>
        <button onClick = {this.handleClick3()}>btn2</button>
        <button onClick = {this.handleClick1}>btn3</button>
      </div>
    )
  }
}
export default bindThis;