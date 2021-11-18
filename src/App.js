import React, { Fragment } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <Fragment>
      <header>
        <NavBar />
        <ItemListContainer />       
      </header>
    </Fragment>   
  );
}

export default App;
