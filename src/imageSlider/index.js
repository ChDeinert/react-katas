import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import shortid from 'shortid';

import SliderItemList from './sliderItemList';
import SliderIndicators from './sliderIndicators';

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
    };
    this.changeCurrentImage = this.changeCurrentImage.bind(this);
  }

  render() {
    const { images } = this.props;

    return (
      <section className="image-slider">
        <SliderItemList
          itemlist={images}
          currentItemIndex={this.state.currentImage}
        />
        <SliderIndicators
          itemcount={images.length}
          currentItemIndex={this.state.currentImage}
          click={this.changeCurrentImage}
        />
      </section>
    );
  }

  changeCurrentImage(index) {
    return e => {
      this.setState({
        currentImage: index,
      });
    };
  }
}

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
};
ImageSlider.defaultProps = {
  images: [],
};

export default ImageSlider;
