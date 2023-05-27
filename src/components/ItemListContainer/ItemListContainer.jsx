import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProductos, getProductosPorCategoria } from '../../asyncmock'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const {idCategoria} = useParams ();

  useEffect(() => {
    const functionProductos = idCategoria ? getProductosPorCategoria : getProductos;

    functionProductos(idCategoria)
      .then(res => setProductos(res))
      .catch(error => console.log(error))
  }, [idCategoria])

  return (
    <div className="container mt-4">
      <h1 class="bg-danger text-uppercase text-white">Mis Productos</h1>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;