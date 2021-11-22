import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Counter from './components/Counter/Counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

class App extends Component {

  render() { 
    return (
      <>
          <header>
            <NavBar />
          </header>
          <main>
            <ItemListContainer 
              greeting='Hola Usuario!' />  
            <Counter />
          </main>
      </>   
    );
  }
}

export default App;
