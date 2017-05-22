import React from 'react';
import { shallow } from 'enzyme';

import SliderControls from './';

it('renders with onClick handlers', () => {
  const previous = () => {};
  const next = () => {};
  const wrapper = shallow(<SliderControls previous={previous} next={next} />);
  expect(
    wrapper.find('.image-slider__control-button--left').props().onClick
  ).toBe(previous);
  expect(
    wrapper.find('.image-slider__control-button--right').props().onClick
  ).toBe(next);
});
