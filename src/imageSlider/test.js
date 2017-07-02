import React from 'react';
import { shallow, mount } from 'enzyme';

import ImageSlider from './';

describe('ImageSlider', () => {
  it('renders without images', () => {
    const wrapper = shallow(<ImageSlider images={[]} />);
    expect(wrapper.find('SliderControls').length).toBe(1);
    expect(wrapper.find('SliderControls').props().previous).toBeDefined();
    expect(wrapper.find('SliderControls').props().next).toBeDefined();
    expect(wrapper.find('SliderItemList').length).toBe(1);
    expect(wrapper.find('SliderItemList').props().itemlist.length).toBe(0);
    expect(wrapper.find('SliderIndicators').length).toBe(1);
    expect(wrapper.find('SliderIndicators').props().itemcount).toBe(0);
    expect(wrapper.find('SliderIndicators').props().click).toBeDefined();
  });

  it('renders with single image', () => {
    const wrapper = shallow(
      <ImageSlider images={[{ src: 'foo', alt: 'bar' }]} />
    );
    expect(wrapper.find('SliderItemList').props().itemlist.length).toBe(1);
    expect(wrapper.find('SliderIndicators').props().itemcount).toBe(1);
  });

  it('renders with multiple images', () => {
    const wrapper = shallow(
      <ImageSlider
        images={[
          { src: 'foo', alt: 'bar' },
          { src: 'foo2', alt: 'bar2' },
          { src: 'foo3', alt: 'bar3' },
        ]}
      />
    );
    expect(wrapper.find('SliderItemList').props().itemlist.length).toBe(3);
    expect(wrapper.find('SliderIndicators').props().itemcount).toBe(3);
  });

  it('sets the correct state on changeCurrentImage', () => {
    const wrapper = mount(
      <ImageSlider
        images={[
          { src: 'foo', alt: 'bar' },
          { src: 'foo2', alt: 'bar2' },
          { src: 'foo3', alt: 'bar3' },
        ]}
      />
    );
    expect(wrapper.state().currentImage).toBe(0);
    wrapper.find('SliderIndicators').childAt(1).simulate('click');
    expect(wrapper.state().currentImage).toBe(1);
    wrapper.find('SliderIndicators').childAt(2).simulate('click');
    expect(wrapper.state().currentImage).toBe(2);
  });
});
