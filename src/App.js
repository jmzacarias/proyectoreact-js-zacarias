import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

class App extends Component {
  render() { 
    return (
      <>
        <header>
          <NavBar />
          <ItemListContainer 
            title='Hola Usuario!'
          />       
        </header>
      </>   
    );
  }
}

export default App;
