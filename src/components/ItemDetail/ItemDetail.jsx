import './ItemDetail.css'

const ItemDetail = ({ id, nombre, precio, img }) => {
  return (
    <div className='contenedorItem'>
      <h2>Nombre: {nombre} </h2>
      <h3>Precio: {precio} </h3>
      <h3>ID: {id} </h3>
      <p> Lorem ipsun dolor sit amet consectetur adipsicing elite</p>
      <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail