import React from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import shortid from 'shortid';

import SliderItem from '../sliderItem';

const SliderItemList = ({ itemlist, currentItemIndex }) => (
  <ul className="image-slider__wrapper">
    <CSSTransitionGroup
      transitionName="image-slider__item"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      {itemlist.map((image, i) => (
        <SliderItem
          image={image}
          active={i === currentItemIndex}
          key={shortid.generate()}
        />
      ))}
    </CSSTransitionGroup>
  </ul>
);

SliderItemList.propTypes = {
  itemlist: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
  currentItemIndex: PropTypes.number.isRequired,
};

export default SliderItemList;
