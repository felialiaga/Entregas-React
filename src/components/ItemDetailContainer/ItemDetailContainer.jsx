import { useState, useEffect } from "react";
import { getAProduct } from "../../asyncmock.js";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null);

    const {idItem} = useParams();

    useEffect(() => {
        getAProduct(idItem)
            .then(respuesta => setProducto(respuesta))
    }, [idItem])

    return (
        <div>
            <ItemDetail {...producto}/>
        </div>
    )
}

export default ItemDetailContainer