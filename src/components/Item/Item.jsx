import './Item.css';

const Item = ({id, nombre, precio, img}) => {
  return (
    
        <div className="cardProducto">
            <img src= {img} />
            <h3>Nombre: {nombre} </h3>
            <p>Precio: {precio} </p>
            <p>ID: {id} </p>
            <button> Ver detalles</button>
        </div>

  )
}

export default Item