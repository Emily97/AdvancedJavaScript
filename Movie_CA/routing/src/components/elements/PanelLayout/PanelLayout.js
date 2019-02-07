import React from 'react';
import './PanelLayout.css';

const PanelLayout = (props) => {

  const renderElements = () => {
    const gridElements = props.children.map( (element, i) => {
        return(
          <div key={i} className="movie-grid-element">
            {element}
          </div>
        )
    })
    return gridElements;
  }

  return (
    <div className="movie-grid">
      {props.header && !props.loading ? <h1>{props.header}</h1> : null}
      <div className="movie-grid-content">
         {renderElements()}
      </div>
    </div>
  )
}

export default PanelLayout;
