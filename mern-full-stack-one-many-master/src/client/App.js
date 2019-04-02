import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import ChefList from './ChefList';
import RecipeList from './RecipeList';

// 'main' Component. Sets up the React Router and respective routes
const App = () => {
  return(
    <HashRouter>
      <div>
        <Route exact path="/" component={ChefList}/>
        <Route path="/module/:id" component={RecipeList}/>
      </div>
    </HashRouter>
  );
};

export default App;
