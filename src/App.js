import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './views/Home'
import Category from './views/Category'
import ItemView from './views/ItemView'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Cart from './components/Cart/Cart'



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
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/category/:categoryId' element={<Category />}/>
                <Route exact path='/item/:id' element={<ItemView />}/>
                {/* <Route exact path='/cart' element={<Cart />}/> */}
              </Routes>
            </main>
        </> 
      </Router>   
    );    
  }
}

export default App;
