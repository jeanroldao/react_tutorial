import React from 'react';

import Footer from './Footer';
import Header from './Header';

export default class Layout extends React.Component {

  constructor() {
    super();
    this.state = { name: "Jean" };
    
    setTimeout(() => {
      this.setState({ name: "Roldão" });
    }, 5000);  }
  
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