import React from 'react'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    
    <>

      <BrowserRouter>

        <NavBar/>

        <Routes>
          <Route path='/' element= { <ItemListContainer /> } />
          <Route path='/categoria/:idCat' element= { <ItemListContainer /> } />
          <Route path='/item/:id' element= { <ItemDetailContainer/> } />
        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App