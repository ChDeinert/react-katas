import React from 'react';
import { storiesOf } from '@storybook/react';
import ImageSlider from './';
import './style.sass';

storiesOf('ImageSlider', module)
  .add('minimal', () => (
    <div className="image-slider__body"><ImageSlider images={[]} /></div>
  ))
  .add('one item', () => (
    <div className="image-slider__body">
      <ImageSlider
        images={[
          { src: 'https://source.unsplash.com/category/nature/600x370' },
        ]}
      />
    </div>
  ))
  .add('two items', () => (
    <div className="image-slider__body">
      <ImageSlider
        images={[
          { src: 'https://source.unsplash.com/category/technology/600x370' },
          { src: 'https://source.unsplash.com/category/nature/600x370' },
        ]}
      />
    </div>
  ))
  .add('three items', () => (
    <div className="image-slider__body">
      <ImageSlider
        images={[
          { src: 'https://source.unsplash.com/category/technology/600x370' },
          { src: 'https://source.unsplash.com/category/nature/600x370' },
          { src: 'https://source.unsplash.com/category/buildings/600x370' },
        ]}
      />
    </div>
  ));
