import React from "react";

class House extends React.Component {
  constructor(props) {
    super(props);

    // Setup the state data
    this.state = {
    };
  }
  // Define what happens when this component gets drawn on the UI
  // Note the two instances of conditional rendering { ___ ? ___ : ____ }
  render() {
    return (
      <div className="column is-half is-offset-one-quarter">
          <div className="card-content notification is-primary">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">House Name: {this.props.name}</p>
                <p className="subtitle">Region: {this.props.region}</p>
                <p className="subtitle">Quote: "{this.props.words}"</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Allow this to be imported by another JS file
export default House;
