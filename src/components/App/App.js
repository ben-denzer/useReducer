import React from 'react';
import MainContent from '../MainContent';
import SideNav from '../SideNav';
import { AppWrapper } from './App.style';

function App(props) {
  return (
    <AppWrapper>
      <SideNav />
      <MainContent />
    </AppWrapper>
  );
}

export default App;
