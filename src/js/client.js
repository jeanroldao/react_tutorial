import React from 'react';
import ReactDOM from 'react-dom';

var elem = [4, 8, 5];

class Layout extends React.Component {
  
  render() {
    return (
      <h1>Works, it seems!!</h1>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);