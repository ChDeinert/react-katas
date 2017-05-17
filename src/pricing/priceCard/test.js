import React from 'react';
import { shallow } from 'enzyme';

import PriceCard from './';

it('Renders with minimal props', () => {
  const action = () => {};
  const wrapper = shallow(
    <PriceCard title="Title" amount="1234" period="foo" action={action} />
  );
  expect(wrapper.find('.price-card__title').text()).toBe('Title');
  expect(wrapper.find('.price-card__amount').text()).toBe('1234');
  expect(wrapper.find('.price-card__period').text()).toBe('foo');
  expect(wrapper.find('.price-card__action').text()).toBe('Get this!');
  expect(wrapper.find('.price-card__action').props().onClick).toBe(action);
});

it('Renders with currency', () => {
  const wrapper = shallow(
    <PriceCard
      title="Title"
      amount="1234"
      currency="EUR"
      period="foo"
      action={() => {}}
    />
  );
  expect(wrapper.find('.price-card__currency').text()).toBe('EUR');
});

it('Renders with infotext', () => {
  const infotext =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  const wrapper = shallow(
    <PriceCard
      title="Title"
      info={infotext}
      amount="1234"
      period="foo"
      action={() => {}}
    />
  );
  expect(wrapper.find('.price-card__info').text()).toBe(infotext);
});

it('Renders with one Feature', () => {
  const wrapper = shallow(
    <PriceCard
      title="Title"
      amount="1234"
      period="foo"
      features={['bar']}
      action={() => {}}
    />
  );
  expect(wrapper.find('.price-card__features').length).toBe(1);
  expect(wrapper.find('.price-card__features').children().length).toBe(1);
  expect(wrapper.find('.price-card__features').children().at(0).text()).toBe(
    'bar'
  );
});

it('Renders with multiple Features', () => {
  const features = ['bar', 'bar2', 'bar3', 'bar4'];
  const wrapper = shallow(
    <PriceCard
      title="Title"
      amount="1234"
      period="foo"
      features={features}
      action={() => {}}
    />
  );
  expect(wrapper.find('.price-card__features').length).toBe(1);
  expect(wrapper.find('.price-card__features').children().length).toBe(4);
  expect(wrapper.find('.price-card__features').text()).toBe('barbar2bar3bar4');
});
