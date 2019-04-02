import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './app.css';

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = { recipes: [] };
  }

  componentDidMount() {
    axios.get(`api/chefs/${this.props.match.params.id}/recipes`)
      .then(response => {
        this.setState({ recipes: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {

    const recipeList = this.state.recipes.map(u => (
      <Recipe
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
        {recipeList.length ?
          <div>
            <h2>All Recipes</h2>
            <div>{recipeList}</div></div> :
          <h2>No Recipes</h2> }
      </div>
    );
  }
}

const Recipe = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Cook Time: {props.time} minutes</p>
      <p>Cooking Level: {props.level}</p>
    </div>
  );
};

export default RecipeList;
