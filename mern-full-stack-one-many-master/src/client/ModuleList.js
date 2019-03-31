import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './app.css';

class ModuleList extends Component {
  constructor(props) {
    super(props);
    this.state = { modules: [] };
  }

  componentDidMount() {
    axios.get(`api/lecturers/${this.props.match.params.id}/modules`)
      .then(response => {
        this.setState({ modules: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {

    const moduleList = this.state.modules.map(u => (
      <Module
        key={u._id}
        id={u._id}
        name={u.name}
        time={u.time}
        level={u.level}
      />
    ));

    return (
      <div>
        <Link to={'/#/'}>
          <button type="button">
              Return
          </button>
        </Link>
        {moduleList.length ?
          <div>
            <h2>All Recipes</h2>
            <div>{moduleList}</div></div> :
          <h2>No Recipes</h2> }
      </div>
    );
  }
}

const Module = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Cook Time: {props.time} minutes</p>
      <p>Cooking Level: {props.level}</p>
    </div>
  );
};

export default ModuleList;
