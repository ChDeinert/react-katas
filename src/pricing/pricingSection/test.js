import React from 'react';
import { shallow } from 'enzyme';

import PricingSection from './';

describe('PricingSection', () => {
  it('Renders empty', () => {
    const wrapper = shallow(<PricingSection />);
    expect(wrapper.find('.pricing').length).toBe(1);
    expect(wrapper.children().length).toBe(0);
  });

  it('Renders with one child', () => {
    const wrapper = shallow(
      <PricingSection><div className="one">foo</div></PricingSection>
    );
    expect(wrapper.children().length).toBe(1);
    expect(wrapper.children().props().className).toBe('one');
    expect(wrapper.children().children().text()).toBe('foo');
  });

  it('Renders with multiple children', () => {
    const wrapper = shallow(
      <PricingSection>
        <div className="one">foo</div>
        <div className="two">bar</div>
        <div className="three">foobar</div>
      </PricingSection>
    );
    expect(wrapper.children().length).toBe(3);
    expect(wrapper.children().at(0).props().className).toBe('one');
    expect(wrapper.children().at(0).children().text()).toBe('foo');
    expect(wrapper.children().at(1).props().className).toBe('two');
    expect(wrapper.children().at(1).children().text()).toBe('bar');
    expect(wrapper.children().at(2).props().className).toBe('three');
    expect(wrapper.children().at(2).children().text()).toBe('foobar');
  });
});
