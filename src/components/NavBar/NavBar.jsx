import React from 'react';
import "./NavBar.css";
import CartWidget from '../CartWidget/CartWidget.jsx';

const NavBar = () => {
  return (
    
    <header>
        <h1>Tecnologie Shop</h1>

        <nav>
            <ul>
              <li>Phones</li>
              <li>Headphones</li>
              <li>TV</li>
              <li>Charger</li>
            </ul>
        </nav>

        <CartWidget/>
        
    </header>

  )
}

export default NavBar