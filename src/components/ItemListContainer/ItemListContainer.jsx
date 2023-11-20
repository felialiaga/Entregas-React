import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.jsx";
import { useParams } from "react-router-dom";
import { db } from "../../services/config.js";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  const { categoria } = useParams();


  useEffect(() => {

    const misProductos = categoria ? query(collection(db, "productos"), where("idCategoria", "==", categoria)) : collection(db, "productos");

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data()
          return {id: doc.id, ...data}
        })
        setProductos(nuevosProductos)
      })


  }, [categoria]);

  return (
    
    <>
      <ItemList productos = {productos} />
    </>

  )
}

export default ItemListContainer