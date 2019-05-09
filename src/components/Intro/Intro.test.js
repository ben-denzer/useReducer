import React from 'react';
import Intro from './Intro';
import { shallow } from 'enzyme';

it('should render without crashing', () => {
  const wrapper = shallow(<Intro />);
});
