import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Header from '../../src/components/weather-seven/header-seven';

describe('<HeaderSeven />', () => {
  it('should have the name Header', () => {
    const TestComponent = () => <Header />;
    const wrapper = shallow(<TestComponent />);
    expect(wrapper.name()).to.equal('Header');
  });

  it('should have a button', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('button')).to.have.length(1);
  });
});