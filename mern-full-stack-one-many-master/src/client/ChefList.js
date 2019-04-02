import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Chef from './Chef';
import axios from 'axios';
import './app.css';

class ChefList extends Component {
  constructor(props) {
    super(props);

    this.state = { chefs: [] };
  }

  componentDidMount() {
    axios.get('api/chefs')
      .then(response => {
        this.setState({ chefs: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {

    const chefList = this.state.chefs.map(u => (
      <Chef
        key={u._id}
        id={u._id}
        name={u.name}
        image={u.image}
        email={u.email}
        region={u.region}
      />
    ));

    return (
      <div>
        <h2>All Chefs</h2>
        <div>{chefList}</div>
      </div>
    );
  }
}

export default ChefList;
