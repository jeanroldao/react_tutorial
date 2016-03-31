import React from 'react';

import Title from './Header/Title';

export default class Header extends React.Component {

  handleEvent(e) {
    const title = e.target.value;
    console.log(title);
    this.props.changeTitle(title);
  }
  
  render() {
    return (
      <div>
        <Title text={this.props.title} size="3" />
        <input value={this.props.title} 
          onChange={this.handleEvent.bind(this)} />
      </div>
    );
  }
}