import React from "react";
import Clicky from "./clicky";

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

export default User;
