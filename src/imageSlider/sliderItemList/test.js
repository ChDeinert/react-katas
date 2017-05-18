import React from 'react';
import { shallow } from 'enzyme';

import SliderItemList from './';

it('renders an empty list with no items', () => {
  const wrapper = shallow(
    <SliderItemList itemlist={[]} currentItemIndex={0} />
  );
  expect(wrapper.find('CSSTransitionGroup').children().length).toBe(0);
});

it('renders with one item', () => {
  const testlist = [{ src: 'foo' }];
  const wrapper = shallow(
    <SliderItemList itemlist={testlist} currentItemIndex={0} />
  );
  expect(wrapper.find('CSSTransitionGroup').children().length).toBe(1);
  expect(wrapper.find('CSSTransitionGroup').childAt(0).props().image).toBe(
    testlist[0]
  );
  expect(wrapper.find('CSSTransitionGroup').childAt(0).props().active).toBe(
    true
  );
});

it('renders with multiple items', () => {
  const testlist = [{ src: 'foo' }, { src: 'foo2' }, { src: 'foo3' }];
  const wrapper = shallow(
    <SliderItemList itemlist={testlist} currentItemIndex={0} />
  );
  expect(wrapper.find('CSSTransitionGroup').children().length).toBe(3);
  expect(wrapper.find('CSSTransitionGroup').childAt(0).props().image).toBe(
    testlist[0]
  );
  expect(wrapper.find('CSSTransitionGroup').childAt(1).props().image).toBe(
    testlist[1]
  );
  expect(wrapper.find('CSSTransitionGroup').childAt(2).props().image).toBe(
    testlist[2]
  );
});
