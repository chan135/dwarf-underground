import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Ad from './Ad';
import Other from './Other'
import Footer from './Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <main className="expanded row">
          <Body />
          <Ad />
          <Other />
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
