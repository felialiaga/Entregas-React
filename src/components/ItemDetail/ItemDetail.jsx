import './ItemDetail.css';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Contador from '../Contador/Contador';


const ItemDetail = ({id, nombre, stock, precio, img}) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {agregarAlCarrito} = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad)

    const item = {id, nombre, precio};
    agregarAlCarrito(item, cantidad);

  }






  return (
    <div className='contenedorItem'>
        <h2 className='nombre'>{nombre} </h2>
        <h3 className='precio'>${precio} </h3>
        <img src= {img} alt= {nombre} className='img'/>
        <p className='descripcion'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum velit amet a molestiae, unde atque deleniti consequuntur quas repellat ex ipsum tempora dolores labore rem possimus id nihil maiores!</p>
        
      {
        agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra </Link>) : <Contador className="contador" inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>
      }
      <p className='stock'>Productos Disponibles: {stock} </p>

    </div>
  )
}

export default ItemDetail