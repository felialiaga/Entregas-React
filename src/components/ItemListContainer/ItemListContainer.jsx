import { useState, useEffect } from "react";
// import { getProductos, getProductosPorCategoria } from "../../asyncmock.js";
import ItemList from "../ItemList/ItemList.jsx";
import { useParams } from "react-router-dom";
import { db } from "../../services/config.js";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  const {idCat} = useParams();

  // useEffect(() => {

  //   const funcionProductos = idCat ? getProductosPorCategoria : getProductos;

  //   funcionProductos(idCat)
  //     .then(resp => setProductos(resp))

  // }, [idCat]);

  useEffect(() => {

    const misProductos = idCat ? query(collection(db, "productos"), where("idCategoria", "==", "idCat")) : collection(db, "productos");

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data()
          return {id: doc.id, ...data}
        })
        setProductos(nuevosProductos)
      })


  }, [idCat]);

  return (
    
    <>
      <ItemList productos = {productos} />
    </>

  )
}

export default ItemListContainer