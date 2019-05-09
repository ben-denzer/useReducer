import React from 'react';
import Hooks from './Hooks';
import { shallow } from 'enzyme';

it('should render without crashing', () => {
  const wrapper = shallow(<Hooks />);
});
