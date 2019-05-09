import React from 'react';
import reactLogo from '../../images/logo.svg';
import { IntroWrapper } from './Intro.style';

function Intro(props) {
  return (
    <IntroWrapper>
      <h1>React.useReducer()</h1>
      <h2>The Cheat Mode of Hooks</h2>
      <div className="logoContainer">
        <img className="appLogo" src={reactLogo} alt="" />
      </div>
    </IntroWrapper>
  );
}

export default Intro;
