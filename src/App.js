import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Contents from './components/Contents.jsx';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Contents />
      </React.Fragment>
    );
  }
}

export default App;