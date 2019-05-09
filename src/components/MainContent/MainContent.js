import React from 'react';
import { Router } from '@reach/router';

import Hooks from '../Hooks';
import Intro from '../Intro';
import UseState from '../UseState';
import { MainContentWrapper } from './MainContent.style';

function MainContent(props) {
  return (
    <MainContentWrapper>
      <Router>
        <Intro path="/" />
        <Hooks path="/hooks" />
        <UseState path="/useState" />
      </Router>
    </MainContentWrapper>
  );
}

export default MainContent;
