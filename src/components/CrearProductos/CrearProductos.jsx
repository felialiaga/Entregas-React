import { useState, useEffect } from 'react';
import { db } from '../../services/config';
import { collection, where, addDoc, query } from 'firebase/firestore';

import './CrearProductos.css';

const CrearProductos = () => {

    const [nombre, setNombre] = useState('');
    const [stock, setStock] = useState(null);
    const [categoria, setCategoria] = useState('');
    const [precio, setPrecio] = useState(null);
    const [img, setImg] = useState('');


    const manejadorCrearProductos = (e => {
        e.preventDefault();

        addDoc(collection(db, "productos"), {
            nombre: nombre,
            precio: precio,
            img:img,
            idCategoria: categoria,
            stock: stock
        });

        setNombre('');
        setPrecio('');
        setImg('');
        setCategoria('');
        setStock('');

    });

    return (
        <div className='form-crear-productos'>
            <form className='formulario' onSubmit={ manejadorCrearProductos }>

                <label htmlFor="nombre">Nombre del Producto</label>
                <input className='input-crear-productos' type="text"id='nombre' value={nombre} onChange={e => setNombre(e.target.value)} />

                <label htmlFor="precio">Precio del Producto</label>
                <input className='input-crear-productos' type="text"id='precio' value={precio} onChange={e => setPrecio(e.target.value)} />

                <label htmlFor="stock">Cantidad de Ingreso</label>
                <input className='input-crear-productos' type="text"id='stock' value={stock} onChange={e => setStock(e.target.value)} />

                <label htmlFor="img">Imagen del Producto</label>
                <input className='input-crear-productos' type="text"id='img' value={img} onChange={e => setImg(e.target.value)} />

                <label htmlFor="categoria"> Id Categoria del Producto</label>
                <input className='input-crear-productos' type="text"id='categoria' value={categoria} onChange={e => setCategoria(e.target.value)} />

                <button type='submit' className='btn-subir' > Subir </button>

            </form>

            <div className=' categorias-opciones ' >
                <h4> ID de Categorias </h4>
                <p> <b> 2 </b> --------------- Celulares </p>
                <p> <b> 3 </b> --------------- Relojes </p>
                <p> <b> 4 </b> --------------- Auriculares </p>
                <p> <b> 5 </b> --------------- Tvs </p>
                <p> <b> 6 </b> --------------- Accesorios </p>
                <p> <b> 7 </b> --------------- Sonido </p>
            </div>

        
        </div>
    )
}

export default CrearProductos