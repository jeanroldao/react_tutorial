import React from 'react';

import Title from './Header/Title';

export default class Header extends React.Component {

  render() {
    return (
      <Title text={this.props.title} size="3" />
    );
  }
}