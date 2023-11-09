import React from 'react'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext.jsx';
import Cart from './components/Cart/Cart.jsx';
import Checkout from './components/Checkout/Checkout.jsx';


const App = () => {

  return (
    
    <>

      <BrowserRouter>

        <CarritoProvider>

          <NavBar/>

          <Routes>
            <Route path='/' element= { <ItemListContainer /> } />
            <Route path='/categoria/:idCat' element= { <ItemListContainer /> } />
            <Route path='/item/:idItem' element= { <ItemDetailContainer/> } />
            <Route path='/cart' element={ <Cart/> }></Route>
            <Route path='/checkout' element= {<Checkout/>} />
            <Route path='/error' element={<h2>Sitio en construccion</h2>}></Route>
          </Routes>

        </CarritoProvider>

      </BrowserRouter>

    </>

  )
}

export default App