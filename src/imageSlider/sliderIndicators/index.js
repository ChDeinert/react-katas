import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const SliderIndicators = ({ itemcount, currentItemIndex, click }) => (
  <ul className="image-slider__indicators">
    {[...Array(itemcount).keys()].map(itemnumber => (
      <li
        className={
          itemnumber === currentItemIndex
            ? 'image-slider__indicator image-slider__indicator--active'
            : 'image-slider__indicator'
        }
        onClick={click(itemnumber)}
        key={shortid.generate()}
      />
    ))}
  </ul>
);

SliderIndicators.propTypes = {
  itemcount: PropTypes.number.isRequired,
  currentItemIndex: PropTypes.number.isRequired,
  click: PropTypes.func.isRequired,
};

export default SliderIndicators;
