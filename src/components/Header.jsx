import React from 'react';
import NavMenu from './header/NavMenu';

class Header extends React.Component {

  render() {
    return (
      <React.Fragment>
        <img src="../assets/images/hero-2.png" width='1280' />
        <NavMenu />
      </React.Fragment>
    );
  }
}

export default Header;