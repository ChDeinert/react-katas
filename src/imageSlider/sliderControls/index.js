import React from 'react';
import PropTypes from 'prop-types';

const SliderControls = ({ previous, next }) => (
  <div className="image-slider__control-wrapper">
    <div
      className="image-slider__control-button image-slider__control-button--left"
      onClick={previous}
    >
      <svg width="12px" height="24px" viewBox="0 0 12 24">
        <polyline
          className="image-slider__control-button--caret"
          points="10,2 2,12 10,22"
        />
      </svg>
    </div>
    <div
      className="image-slider__control-button image-slider__control-button--right"
      onClick={next}
    >
      <svg width="12px" height="24px" viewBox="0 0 12 24">
        <polyline
          className="image-slider__control-button--caret"
          points="2,2 10,12 2,22"
        />
      </svg>
    </div>
  </div>
);

SliderControls.propTypes = {
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};

export default SliderControls;
