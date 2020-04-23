import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Navbar dark color='primary'>
        <div class='container'>
          <NavbarBrand href='/'>
            Ristoranto con Fusion
          </NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
