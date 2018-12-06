import React from "react";
import ReactDOM from "react-dom";

class Clicky extends React.Component {
  constructor(props){
    super(props);
    this.state = {clickCount: 0};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({clickCount: this.state.clickCount + 1});
    console.log('clicked');
  }
  render() {
    return(
      <div>
      <h1>{this.state.clickCount} times clicked</h1>
      <button onClick={this.handleClick}>My name is {this.props.name}, click me I love to be clicked</button>
      </div>
    );
  }
}
ReactDOM.render(
  <div>
  <Clicky name={'Click Jnr'}/>
  </div>,
  document.getElementById("root")
);
