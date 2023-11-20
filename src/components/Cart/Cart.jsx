import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css';


const Cart = () => {

    const {carrito, total, cantidadTotal, vaciarCarrito} = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <div className="carrito-vacio" >
                <h2 className="no-productos" >No hay productos en el carrito</h2>
                <Link to="/"  className="ver-productos" >Ver Productos</Link>
            </div> 
        )
    }

    return (
        
        <div className="carrito-lleno" >
            {
                carrito.map(producto => <CartItem key={producto.item.id} {...producto}/>)
            }
            <h3 className="total" >Total: ${total} </h3>
            <h3 className="cant-total" >Cantidad Total: {cantidadTotal} </h3>
            <button onClick={() => vaciarCarrito()} className="vaciar-carrito" > Vaciar Carrito </button>
            <Link to='/checkout' className="finalizar" > Finalizar Compra </Link>
        </div>
    )
}

export default Cart