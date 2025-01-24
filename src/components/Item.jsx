import React from 'react';
import ItemCount from './itemCount';
import {Link} from 'react-router-dom';

export const Item = ({product}) => {
    console.log(product)

    const onAdd = (cantidad) => {
      alert(`Agregaste ${cantidad} al carritoS`)
    }
  return (
    <div className='flex flex-col justify-center max-w-sm border-solid border-2 border-indigo-600 rounded-2xl items-center p-4 bg-slate-100'>
      {/* <p>{product.id}</p> */}
      <p>{product.name}</p>
      <img className='w-40 aspect-square rounded-2xl' src={product.img} alt={product.alt} />
      <p>AR$ {product.price}</p>
      {/* <p>{product.category}</p> */}
      <p>Description: {product.description}</p>
      <p>Stock: {product.stock}</p>
      <button><Link to={`/item/${product.id}`}>Ver Mas</Link></button>
      <ItemCount stock={product.stock} onAdd={onAdd}/>

    </div>
  )
}

export default Item
