import React from 'react';
import CodeBlock from './CodeBlock';
import { shallow } from 'enzyme';

it('should render without crashing', () => {
    const wrapper = shallow(<CodeBlock>{`here is some code`}</CodeBlock>);
});
