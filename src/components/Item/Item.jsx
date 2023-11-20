import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, precio, stock, img}) => {
  return (
    
        <div className="cardProducto">

          <div className="cardParteArriba">
            <img src= {img} className='cardProductoImg' />
          </div>
            
          <div className="cardParteBaja">

            <h3 className='cardProductoNombre' >{nombre} </h3>
            <b className='cardProductoPrecio' >${precio} </b>
            <Link to={`/item/${id}`} className='detalles'> Ver Detalles </Link>
            <p className='stock'>Stock: {stock} </p>
            
          </div>

        </div>

  )
}

export default Item