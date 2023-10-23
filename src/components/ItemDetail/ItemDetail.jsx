import './ItemDetail.css';

const ItemDetail = ({nombre, precio, img}) => {

  return (
    <div className='contenedorItem'>
        <h2 className='nombre'>Nombre: {nombre} </h2>
        <h3 className='precio'>Precio: {precio} </h3>
        <img src= {img} alt= {nombre} className='img'/>
        <p className='descripcion'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum velit amet a molestiae, unde atque deleniti consequuntur quas repellat ex ipsum tempora dolores labore rem possimus id nihil maiores!</p>
    </div>
  )
}

export default ItemDetail