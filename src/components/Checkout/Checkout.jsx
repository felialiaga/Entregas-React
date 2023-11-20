import { useState, useEffect } from "react";
import { CarritoContext } from "../../context/CarritoContext.jsx";
import { db } from "../../services/config.js";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import { useContext } from "react";
import './Checkout.css';
import { Link } from "react-router-dom";



const Checkout = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("")

    const {carrito, vaciarCarrito, total, totalCantidad} = useContext(CarritoContext);

    const manejadorFormulario = e => {
        e.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Debes completar todos los campos!!");
            return;
        } 

        if (email != emailConfirmacion) {
            setError("Los campos del email no coinciden!!");
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }


        Promise.all(
            orden.items.map( async productoOrden => {
                const productoRef = doc(db, "productos", productoOrden.id);
                const productoDoc = await getDoc(productoRef);

                const stockActual = productoDoc.data().stock;
            
                await updateDoc( productoRef, {
                    stock: stockActual - productoOrden.cantidad
                });

            })
        )
        .then(() => {

            addDoc(collection(db, "ordenes"), orden)
                .then(docRef => {
                    setOrderId(docRef.id);
                    vaciarCarrito();
                })
                .catch(error => {
                    setError("Ha ocurrido un error en la compra!!");
                    <p> {error} </p>
                })
        })
        .catch((error) => {
            setError("No se puede actualizar el stock!!");
        })
    }


    return (
        <div className="checkout" >

            <h2 className="checkout-titulo" >Checkout</h2>

            <form onSubmit={manejadorFormulario}>

                {
                    carrito.map(producto => (
                        <div key={producto.item.id} className="checkout-detalle" >
                            <p className="checkout-nombre" > <b> {producto.item.nombre} </b>  x {producto.cantidad} </p>
                            <p className="checkout-precio" >  <b> Total: </b> {producto.item.precio * producto.cantidad } </p>
                            <hr />
                        </div>
                    ))
                }

                <div className="data-checkout" >
                    <label htmlFor="dato-nombre"> Nombre </label>
                    <input type="text" id="dato-nombre" className="input-data" onChange={e => setNombre(e.target.value)} />
                </div>

                <div className="data-checkout" >
                    <label htmlFor="dato-apellido"> Apellido </label>
                    <input type="text" id="dato-apellido" className="input-data" onChange={e => setApellido(e.target.value)} />
                </div>

                <div className="data-checkout" >
                    <label htmlFor="dato-celular"> Celular </label>
                    <input type="text" id="dato-celular" className="input-data" onChange={e => setTelefono(e.target.value)} />
                </div>

                <div className="data-checkout" >
                    <label htmlFor="dato-email"> Email </label>
                    <input type="email" id="dato-email" className="input-data" onChange={e => setEmail(e.target.value)} />
                </div>

                <div className="data-checkout" >
                    <label htmlFor="dato-email2"> Confirma tu email </label>
                    <input type="email" id="dato-email2" className="input-data" onChange={e => setEmailConfirmacion(e.target.value)} />
                </div>

                <div className="parte-baja">
                    {
                        error && <p className="error"> {error} </p>
                    }

                    {
                        !orderId && (
                            <>
                                <button type="submit" className="confirmar-compra" > Confirmar compra </button>
                            </>
                        )
                    }

                    {
                        orderId && (
                            <>
                                <strong> Gracias por su compra!! Tu numero de compra es: <p className="numero-orden" > {orderId} </p> </strong>
                                
                                <Link to= "/" className="btn-volver" > Volver </Link>
                            </>
                        )
                    }

                </div>
                

            </form>

        </div>
    )
}

export default Checkout