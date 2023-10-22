import { useState, useEffect } from "react";
import { getProductos } from "../../asyncmock.js";
import ItemList from "../ItemList/ItemList.jsx";

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos()
        .then(respuesta => setProductos(respuesta))
        .catch(error => console.log(error))
  }, [productos]);

  return (
    
    <>
        <h2>Mis productos: </h2>
        <ItemList productos = {productos} />
    </>

  )
}

export default ItemListContainer