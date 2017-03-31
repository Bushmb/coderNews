import React, { Component } from 'react';

import './App.css';
import Header from './Header';
// import ButtonList from './ButtonList';
// import CardContainer from './CardContainer';
import ContentContainer from '../containers/ContentContainer';


class App extends Component {
  render() {
    return (
      <div className="content-container">
        <Header />
        <h1 className="content-container">Coder News</h1>
        <ContentContainer />
      </div>
    );
  }
}

export default App;