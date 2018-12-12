import React from "react";
import ReactDOM from "react-dom";
import User from "./usercard";
import axios from 'axios';

class UserGrid extends React.Component {
  constructor(props){
    super(props);

    this.state = {users: []};
  }
  componentDidMount(){
    axios.get('https://randomuser.me/api/?results=50')
      .then(response => {
        this.setState({users: response.data.results});
      })
      .catch(error => {
        console.log(error);
      })
  }
  render(){
    console.log(this.state.users);
    const userList = this.state.users.map(u => (
      <User
        key={u.name.first}
        name={u.name.first}
        image={u.picture.medium}
        quote={u.quote}
      />
    ));
    return(
      <div className="columns is-multiline">{userList}</div>
    )
  }
}

ReactDOM.render(
  <UserGrid />,
  document.getElementById("root")
);
