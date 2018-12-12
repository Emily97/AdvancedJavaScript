import React from "react";
import ReactDOM from "react-dom";
import Clicky from "./clicky";
import data from "./data";

const users = data.results; // [{user},{user}, ...]

function User(props) {
  return (
    <div className="column is-3">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img alt="Profile" src={props.image} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{props.name}</p>
              <p className="subtitle">{props.quote}</p>
              <Clicky />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const userList = users.map(u => (
  <User
    key={u.name.first}
    name={u.name.first}
    image={u.picture.medium}
    quote={u.quote}
  />
));

ReactDOM.render(
  <div className="columns is-multiline">{userList}</div>,
  document.getElementById("root")
);
