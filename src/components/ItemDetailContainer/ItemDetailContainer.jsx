import { useState, useEffect } from "react";
import { getAProduct } from "../../asyncmock.js";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null);

    useEffect(() => {
        getAProduct(3)
            .then(resp => setProducto(resp))
    }, [])

    return (
        <div>
            <ItemDetail {...producto}/>
        </div>
    )
}

export default ItemDetailContainer