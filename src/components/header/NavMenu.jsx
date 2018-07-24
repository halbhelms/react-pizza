import React from 'react';
import NavItem from './NavItem';

class NavMenu extends React.Component {

  navItems = [
    {label: "Home", link: "index.html"},
    {label: "Menu", link: "pizzas.html"},
    {label: "Company", link: "company.html"},
    {label: "Careers", link: "careers.html"}
  ];

  render() {
    return (
      <section class="top-nav">
        {this.navItems.map( navItem => <NavItem href={navItem.link} label={navItem.label} />)} 
      </section>
    );
  }
}

export default NavMenu;