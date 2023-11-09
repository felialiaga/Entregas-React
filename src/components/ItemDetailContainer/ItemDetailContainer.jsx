import { useState, useEffect } from "react";
// import { getAProduct } from "../../asyncmock.js";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { useParams } from "react-router-dom";
import { db } from "../../services/config.js";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null);

    const {idItem} = useParams();

    // useEffect(() => {
    //     getAProduct(idItem)
    //         .then(respuesta => setProducto(respuesta))
    // }, [idItem])

    useEffect(() => {

        const nuevoDoc = doc(db, "productos", idItem);

        getDoc(nuevoDoc)
            .then(res => {
                const data = res.data();
                const nuevoProducto = {id: res.id, ...data}
                setProducto(nuevoProducto)
            })

    }, [idItem]);

    return (
        <div>
            <ItemDetail {...producto}/>
        </div>
    )
}

export default ItemDetailContainer