import React from 'react';
import UseState from './UseState';
import { shallow } from 'enzyme';

it('should render without crashing', () => {
  const wrapper = shallow(<UseState />);
});
