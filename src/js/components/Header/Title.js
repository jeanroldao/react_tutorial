import React from 'react';

export default class Title extends React.Component {

  render() {
    console.log('Title props', this.props);
    return (
      <h1>{this.props.text}!</h1>
    );
  }
}