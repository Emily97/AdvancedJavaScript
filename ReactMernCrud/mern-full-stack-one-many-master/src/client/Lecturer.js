import React from 'react';
import { Link } from 'react-router-dom';
import './app.css';

class Lecturer extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <p>{this.props.name}</p>
          <figure>
            <img alt="Profile" src={this.props.image} />
          </figure>
          <p>Region: {this.props.region}</p>
          <p>Email: {this.props.email}</p>

          <Link to={`/module/${this.props.id}`}>
            <button type="button">
                  View recipes
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Lecturer;
