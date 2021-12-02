import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



class App extends Component {

  render() { 
    return (
      <>
          <header>
            <NavBar />
          </header>
          <main>
            <ItemListContainer />  
            <ItemDetailContainer />
          </main>
      </>   
    );
  }
}

export default App;
