import React, { Component } from 'react';
import logo from '../logo.svg';
// import firebaseApp from '../firebase';
import firebase from 'firebase';
import './App.css';

class App extends Component {

  signUserOut() {
    firebase.auth().signOut().then(function() {
      console.log("info")
    }).catch(function(error) {
      console.log(error)
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          className="btn btn-info"
          type="button"
          onClick={() => this.signUserOut()}
        >
        Sign Out
        </button>
      </div>
    );
  }
}

export default App;
