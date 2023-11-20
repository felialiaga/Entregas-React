import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import './CartItem.css';



const CartItem = ({item, cantidad}) => {

    const {eliminarProducto} = useContext(CarritoContext)

    return (
        <div className="carrito-producto" >
            <h4 className="carrito-nombre" > {item.nombre} </h4>
            <p className="carrito-cantidad" > <b> Cantidad: </b> {cantidad} </p>
            <p className="carrito-precio" > <b> Precio: </b> {item.precio} </p>
            <button onClick={() => eliminarProducto(item.id)} className="carrito-eliminar" > Eliminar </button>
            <hr />
        </div>
    )
}

export default CartItem