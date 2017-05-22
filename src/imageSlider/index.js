import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import shortid from 'shortid';

import SliderItemList from './sliderItemList';
import SliderIndicators from './sliderIndicators';
import SliderControls from './sliderControls';

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
    };
    this.changeCurrentImage = this.changeCurrentImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
  }

  render() {
    const { images } = this.props;

    return (
      <section className="image-slider">
        <SliderControls previous={this.previousImage} next={this.nextImage} />
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

  previousImage() {
    let previousIndex = this.state.currentImage - 1;
    console.log('prev', previousIndex);
    if (previousIndex < 0) {
      previousIndex = this.props.images.length - 1;
    }
    this.setState({
      currentImage: previousIndex,
    });
  }

  nextImage() {
    let nextIndex = this.state.currentImage + 1;
    console.log('next', nextIndex);
    if (nextIndex === this.props.images.length) {
      nextIndex = 0;
    }
    this.setState({
      currentImage: nextIndex,
    });
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
