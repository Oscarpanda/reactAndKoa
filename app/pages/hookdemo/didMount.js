import React from 'react'
export default class Conter extends React.Component{
  constructor() {
    super();
    this.state = {number: 0};
    this.add = () => {
      this.setState({
        number: this.state.number + 1
      })
    }
    this.changeTitle = () => {
      document.title = `你已经点击了${this.state.number}`;
    }
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.changeTitle();
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
    this.changeTitle();
  }
  render() {
    return (
      <>
        <p>{this.state.number}</p>
        <button onClick={this.add}></button>
      </>
    )
  }
}