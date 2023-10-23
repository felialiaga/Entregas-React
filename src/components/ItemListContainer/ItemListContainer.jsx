import { useState, useEffect } from "react";
import { getProductos, getProductosPorCategoria } from "../../asyncmock.js";
import ItemList from "../ItemList/ItemList.jsx";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  const {idCat} = useParams();

  useEffect(() => {

    const funcionProductos = idCat ? getProductosPorCategoria : getProductos;

    funcionProductos(idCat)
      .then(resp => setProductos(resp))

  }, [idCat]);

  return (
    
    <>
      <ItemList productos = {productos} />
    </>

  )
}

export default ItemListContainer