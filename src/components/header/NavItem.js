import React from 'react';

class NavItem extends React.Component {

  render() {
    return (
      <a class="item" href={this.props.href}>{this.props.label}</a>
    );
  }
}

export default NavItem;