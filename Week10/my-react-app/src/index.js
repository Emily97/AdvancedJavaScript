import React from "react";
import ReactDOM from "react-dom";
import User from "./User";
// Note: ensure you've installed axios with 'npm install axios'
import axios from "axios";

// 'Outer' component that will contain all the User 'cards'
class UserGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = { users: [] };
  }

  // Runs when component is mounted
  componentDidMount() {
    // Get data for 50 users
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(response => {
        // GET request was successful, store the users in state
        console.log(response.data);
        this.setState({ users: response.data });
      })
      .catch(err => {
        // GET failed, log the error
        console.log(err);
      });
  }

  render() {
    const userList = this.state.users.map(u => (
      <User
        key={u.id}
        name={u.name}
        body={u.body}
        email={u.email}
      />
    ));

    return <div className="columns is-multiline">{userList}</div>;
  }
}

ReactDOM.render(<UserGrid />, document.getElementById("root"));
