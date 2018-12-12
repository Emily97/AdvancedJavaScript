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
      <button className="button is-danger is-focused" onClick={this.handleClick}>Like {this.state.clickCount}</button>
      </div>
    );
  }
}
export default Clicky;
