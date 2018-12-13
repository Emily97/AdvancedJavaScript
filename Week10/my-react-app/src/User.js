import React from "react";
import ReactDOM from "react-dom";

// Component to represent a single User 'Card' (note: this is a class component so can use state)
// Classes used below are from Bulma, see index.html above
class User extends React.Component {
  constructor(props) {
    super(props);

    // Setup the state data
    this.state = {
      inappropriate: true
    };

    // This binding is necessary to make `this` work in the onclick callback
    this.handleClick = this.handleClick.bind(this);
  }

  // Event handler for the button
  handleClick() {
    // Increment the likes property stored in state
    this.setState(prevState => ({
      inappropriate: !prevState.inappropriate
    }));
    console.log(this.state.inappropriate);
  }

  // Define what happens when this componet gets drawn on the UI
  render() {
    return (
      <div className="column is-3">
        <div className={this.state.inappropriate ? 'has-background-primary':'has-background-danger'}>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4 has-text-white">{this.props.name}</p>
                <p className="has-text-white">{this.props.email}</p>
                <p className="subtitle has-text-white">{this.props.body}</p>
                <button type="button" onClick={this.handleClick}>
                  Flag as {this.state.inappropriate ? 'inappropriate':'appropriate'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Allow this to be imported by another JS file
export default User;
