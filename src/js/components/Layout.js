import React from 'react';

import Footer from './Footer';
import Header from './Header';

export default class Layout extends React.Component {

  constructor() {
    super();
    this.state = { name: "Jean" };
  }
  
  changeTitle(name) {
    this.setState({ name });
  }
  
  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.name} />
        {this.state.name}
        <Footer />
      </div>
    );
  }
}