import React from 'react';
import { shallow } from 'enzyme';

import SliderIndicators from './';

it('renders empty list with length of 0', () => {
  const wrapper = shallow(
    <SliderIndicators
      itemcount={0}
      currentItemIndex={0}
      click={() => () => {}}
    />
  );
  expect(wrapper.children().length).toBe(0);
});

it('renders with length of 1', () => {
  const wrapper = shallow(
    <SliderIndicators
      itemcount={1}
      currentItemIndex={0}
      click={() => () => {}}
    />
  );
  expect(wrapper.children().length).toBe(1);
  expect(wrapper.childAt(0).props().className).toMatch(
    /image-slider__indicator/
  );
  expect(wrapper.childAt(0).props().onClick).toBeDefined();
});

it('renders with length of 3', () => {
  const wrapper = shallow(
    <SliderIndicators
      itemcount={3}
      currentItemIndex={0}
      click={() => () => {}}
    />
  );
  expect(wrapper.children().length).toBe(3);
  expect(wrapper.childAt(0).props().className).toMatch(
    /image-slider__indicator/
  );
  expect(wrapper.childAt(0).props().onClick).toBeDefined();
  expect(wrapper.childAt(1).props().className).toMatch(
    /image-slider__indicator/
  );
  expect(wrapper.childAt(1).props().onClick).toBeDefined();
  expect(wrapper.childAt(2).props().className).toMatch(
    /image-slider__indicator/
  );
  expect(wrapper.childAt(2).props().onClick).toBeDefined();
});

it('renders with correct active item', () => {
  const wrapper = shallow(
    <SliderIndicators
      itemcount={3}
      currentItemIndex={1}
      click={() => () => {}}
    />
  );
  expect(wrapper.childAt(0).props().className).not.toMatch(
    /image-slider__indicator--active/
  );
  expect(wrapper.childAt(1).props().className).toMatch(
    /image-slider__indicator--active/
  );
  expect(wrapper.childAt(2).props().className).not.toMatch(
    /image-slider__indicator--active/
  );
});
