import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

it('should render without crashing', () => {
  const wrapper = shallow(<App />);
});
