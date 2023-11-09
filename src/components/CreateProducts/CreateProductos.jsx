import { useState } from 'react';
import { db } from '../../services/config';
import { collection, addDoc } from 'firebase/firestore';

const CreateProductos = () => {

    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");
    const [idCat, setIdCat] = useState("");
    const [img, setImg] = useState("");

    const manejadorProductos = (e) => {
        e.preventDefault()

        addDoc(collection(db, "productos"), {
        nombre: nombre,
        precio: precio,
        stock: stock,
        idCategoria: idCat,
        img: img
        });

        setNombre("");
        setIdCat("");
        setImg("");
        setPrecio("");
        setStock("");

    }

    return (
        <form onSubmit={manejadorProductos}>
            <label> Nombre </label>
            <input type="text" onChange={e => setNombre(e.target.value)} value={nombre} id='nombre' />
            <br /><br />

            <label> Precio </label>
            <input type="text" onChange={e => setPrecio(e.target.value)} value={precio} id='precio' />
            <br /><br />

            <label> Stock </label>
            <input type="text" onChange={e => setStock(e.target.value)} value={stock} id='stock' />
            <br /><br />

            <label> Imagen </label>
            <input type="text" onChange={e => setImg(e.target.value)} value={img} id='img' />
            <br /><br />

            <label> Numero Categoria </label>
            <input type="text" onChange={e => setIdCat(e.target.value)} value={idCat} id='idCategoria' />
            <br /><br />

            <button type='submit'> Crear Producto </button>
      </form>
    )
}

export default CreateProductos