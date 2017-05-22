import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ImageSlider from './';
import './style.sass';

storiesOf('ImageSlider', module)
  .add('minimal', () => <ImageSlider images={[]} />)
  .add('one item', () => (
    <ImageSlider
      images={[{ src: 'https://source.unsplash.com/category/nature/600x370' }]}
    />
  ))
  .add('two items', () => (
    <ImageSlider
      images={[
        { src: 'https://source.unsplash.com/category/technology/600x370' },
        { src: 'https://source.unsplash.com/category/nature/600x370' },
      ]}
    />
  ))
  .add('three items', () => (
    <ImageSlider
      images={[
        { src: 'https://source.unsplash.com/category/technology/600x370' },
        { src: 'https://source.unsplash.com/category/nature/600x370' },
        { src: 'https://source.unsplash.com/category/buildings/600x370' },
      ]}
    />
  ));
