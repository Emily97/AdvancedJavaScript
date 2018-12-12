import React from "react";
import axios from 'axios';

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
  componentDidMount(){
    axios.get('https://randomuser.me/api/')
      .then(response => {
        console.log(response.data.results);
      })
      .catch(error => {
        console.log(error);
      })
  }
  componentDidUpdate(){
    console.log('update');
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
