import React from "react";
import ReactDOM from "react-dom";
import data from "./data";

const users = data.results; // [{users},{users}, ...]

// User Component - function style
function User(props) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="">
          <img src={props.picture} alt="user profile pic" />
        </figure>
      </div>
      <div className="card-content">
        <h2 className="title">
          {props.name.title} {props.name.first} {props.name.last}
        </h2>
        <p className="subtitle" style={{ color: "grey" }}>
          {props.quote}
        </p>
      </div>
    </div>
  );
}

const userList = users.map(u => (
  <User
    key={u.name.first}
    name={u.name}
    quote={u.quote}
    picture={u.picture.medium}
  />
));

ReactDOM.render(
  <div className="columns is-multiline">{userList}</div>,
  document.getElementById("root")
);
