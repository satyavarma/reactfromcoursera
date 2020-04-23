import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary'>
        <div class='container'>
          <NavbarBrand href='/'>
            Ristoranto con Fusion
          </NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
