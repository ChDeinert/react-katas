import React from 'react';
import { shallow } from 'enzyme';

import SliderItem from './';

it('renders nothing without image', () => {
  const wrapper = shallow(<SliderItem />);
  expect(wrapper.node).toBeNull();
});

it('renders with image', () => {
  const wrapper = shallow(<SliderItem image={{ src: 'foo' }} />);
  expect(wrapper.node).not.toBeNull();
  expect(wrapper.find('img').props().src).toBe('foo');
});

it('renders with image and alt text', () => {
  const wrapper = shallow(<SliderItem image={{ src: 'foo', alt: 'bar' }} />);
  expect(wrapper.node).not.toBeNull();
  expect(wrapper.find('img').props().src).toBe('foo');
  expect(wrapper.find('img').props().alt).toBe('bar');
});

it('renders active image', () => {
  const wrapper = shallow(<SliderItem image={{ src: 'foo' }} active={true} />);
  expect(wrapper.props().className).toMatch(/image-slider__item--current/);
});
