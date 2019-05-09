import React, { useState } from 'react';
import { SideNavWrapper } from './SideNav.style';
import { Link } from '@reach/router';
import menuIcon from '../../images/menu.png';
import homeIcon from '../../images/home.png';

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return { active: isCurrent ? 'true' : 'false' };
    }}
  />
);

function SideNav(props) {
  const [closed, setClosed] = useState(true);

  const toggleSideNav = () => {
    setClosed(!closed);
  };

  return (
    <SideNavWrapper closed={closed}>
      <div className="topRow">
        <img alt="menu" onClick={toggleSideNav} src={menuIcon} />
        {!closed && (
          <NavLink to="/">
            <img alt="home" src={homeIcon} />
          </NavLink>
        )}
      </div>
      <NavLink to="/hooks">1. {!closed && 'Hooks'}</NavLink>
      <NavLink to="/useState">2. {!closed && 'UseState'}</NavLink>
    </SideNavWrapper>
  );
}

export default SideNav;
