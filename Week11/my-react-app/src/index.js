import React from "react";
import ReactDOM from "react-dom";
import House from "./Houses";
// Note: ensure you've installed axios with 'npm install axios'
import axios from "axios";

class HouseList extends React.Component {
  constructor(props) {
    super(props);

    // this is where we will store the comments, when they have been retrieved
    this.state = { houses: [] };
  }

  // Runs when component is mounted
  componentDidMount() {
    // Get data for 500 comments
    axios
      .get("https://anapioficeandfire.com/api/houses/?pageSize=10")
      .then(response => {
        // GET request was successful, store the comments in state
        this.setState({ houses: response.data });
      })
      .catch(err => {
        // GET failed, log the error
        console.log(err);
      });
  }

  render() {
    // For each comment, generate a Comment component and pass data in as props
    const houseList = this.state.houses.map(item => (
      <House
        key={item.url}
        name={item.name}
        region={item.region}
        words={item.words}
      />
    ));

    return <div className="columns is-multiline">{houseList}</div>;
  }
}

ReactDOM.render(<HouseList />, document.getElementById("root"));
