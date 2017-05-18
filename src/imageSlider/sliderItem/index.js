import React from 'react';
import PropTypes from 'prop-types';

const SliderItem = ({ image = {}, active = false }) =>
  !!image.src && image.src !== ''
    ? <li
        className={
          active
            ? 'image-slider__item image-slider__item--current'
            : 'image-slider__item'
        }
      >
        <img
          src={image.src}
          alt={image.alt || ''}
          className="image-slider__image"
        />
      </li>
    : null;

SliderItem.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }),
  active: PropTypes.bool,
};

export default SliderItem;
