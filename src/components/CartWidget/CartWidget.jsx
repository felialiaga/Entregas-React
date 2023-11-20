import './CartWidget.css';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

  const {cantidadTotal} = useContext(CarritoContext)
  return (

    <div className='carrito' >

      <Link to="/cart" className='widget'>
        <img className='carrito-img' src="../cartImage.png" alt="Carrito de compras" />

        {
          cantidadTotal > 0 && <p className='cart-widget' > {cantidadTotal} </p>
        }
      </Link>


    </div>
  )
}

export default CartWidget