import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './views/Home'
import Category from './views/Category'
import ItemView from './views/ItemView'

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



class App extends Component {

  render() {    
    return (
      <Router> 
        <>
            <header>
              <NavBar />
            </header>
            <main>          
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/category/:categoryId' element={<Category />}/>
                <Route path='/item/:id' element={<ItemView />}/>
              </Routes>
            </main>
        </> 
      </Router>   
    );    
  }
}

export default App;
