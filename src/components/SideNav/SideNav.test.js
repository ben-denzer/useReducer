import React from 'react';
import SideNav from './SideNav';
import { shallow } from 'enzyme';

it('should render without crashing', () => {
  const wrapper = shallow(<SideNav />);
});
