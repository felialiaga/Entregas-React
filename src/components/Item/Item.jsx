import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, precio, stock, img}) => {
  return (
    
        <div className="cardProducto">
            {/* <span className='avisoStock'>10 en stock</span> */}
            <img src= {img} />
            <h3>{nombre} </h3>
            <b>${precio} </b>
            <Link to={`/item/${id}`} className='detalles'> Ver Detalles </Link>
            <p className='stock'>Stock: {stock} </p>
        </div>

  )
}

export default Item