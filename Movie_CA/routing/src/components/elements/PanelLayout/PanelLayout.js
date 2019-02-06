import React from 'react';
import PropTypes from 'prop-types';
import './PanelLayout.css';

const PanelLayout = ({ header, loading, children }) => {

  const renderElements = () => {
    const gridElements = children.map( (element, i) => (
      <div key={i} className="movie-grid-element">
        {element}
      </div>
    ))
    return gridElements;
  }

  return (
    <div className="movie-grid">
      {header && !loading ? <h1>{header}</h1> : null}
      <div className="movie-grid-content">
         {renderElements()}
      </div>
    </div>
  )
}

PanelLayout.propTypes = {
  header: PropTypes.string,
  loading: PropTypes.bool
}

export default PanelLayout;
