import React from 'react';

import Footer from './Footer';
import Header from './Header';

export default class Layout extends React.Component {

  constructor() {
    super();
    this.state = { name: "Jean" };

  }
  
  render() {

    
    return (
      <div>
        <Header title={this.state.name} />
        {this.state.name}
        <Footer />
      </div>
    );
  }
}