import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, precio, img}) => {
  return (
    
        <div className="cardProducto">
            <img src= {img} />
            <h3>{nombre} </h3>
            <b>{precio} </b>
            <Link to={`/item/${id}`} className='detalles'> Ver Detalles </Link>
        </div>

  )
}

export default Item