import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
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
            <ItemCount />
          </main>
      </>   
    );
  }
}

export default App;
