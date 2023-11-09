import { useState, useEffect } from "react";
import { CarritoContext } from "../../context/CarritoContext.jsx";
import { db } from "../../services/config.js";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import { useContext } from "react";



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

        //1) Creamos un objeto con todos los datos de la orden de compra:

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

        //2) Guardar la orden en la base de datos

        Promise.all(
            orden.items.map( async productoOrden => {
                // Por cada producto de la coleccion productos obtengo una referencia y obtengo el DOC
                const productoRef = doc(db, "productos", productoOrden.id);
                const productoDoc = await getDoc(productoRef);

                const stockActual = productoDoc.data().stock;
            
                await updateDoc( productoRef, {
                    stock: stockActual - productoOrden.cantidad
                });

            })
        )
        .then(() => {
            // Guardamos la orden en la base de datos

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
        <div>

            <h2>Checkout</h2>

            <form onSubmit={manejadorFormulario}>

                {
                    carrito.map(producto => (
                        <div key={producto.item.id}>
                            <p> {producto.item.nombre}  x {producto.cantidad} </p>
                            <p> {producto.item.precio} </p>
                            <hr />
                        </div>
                    ))
                }

                <div>
                    <label htmlFor=""> Nombre </label>
                    <input type="text" onChange={e => setNombre(e.target.value)} />
                </div>

                <div>
                    <label htmlFor=""> Apellido </label>
                    <input type="text" onChange={e => setApellido(e.target.value)} />
                </div>

                <div>
                    <label htmlFor=""> Celular </label>
                    <input type="text" onChange={e => setTelefono(e.target.value)} />
                </div>

                <div>
                    <label htmlFor=""> Email </label>
                    <input type="email" onChange={e => setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor=""> Confirma tu email </label>
                    <input type="email" onChange={e => setEmailConfirmacion(e.target.value)} />
                </div>

                {
                    error && <p> {error} </p>
                }

                <button type="submit"> Confirmar compra </button>
                
                {
                    orderId && (
                        <>
                            <strong> Gracias por su compra!! Tu numero de compra es: {orderId} </strong>
                        </>
                    )
                }

            </form>

        </div>
    )
}

export default Checkout