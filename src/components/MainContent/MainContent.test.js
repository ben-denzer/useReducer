import React from 'react';
import MainContent from './MainContent';
import { shallow } from 'enzyme';

it('should render without crashing', () => {
  const wrapper = shallow(<MainContent />);
});
