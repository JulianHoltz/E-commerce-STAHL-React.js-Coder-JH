import React from 'react'
import ItemCount from './itemCount';

export const Item = ({product}) => {
    console.log(product)

    const onAdd = (cantidad) => {
      alert(`Agregaste ${cantidad} al carritoS`)
    }
  return (
    <div className='flex flex-col justify-center max-w-sm border-solid border-2 border-indigo-600 rounded-2xl items-center p-4'>
      <p>{product.id}</p>
      <p>{product.name}</p>
      <img className='w-40 aspect-square' src={product.img} alt={product.alt} />
      <p>{product.price}</p>
      <p>{product.category}</p>
      <p>{product.description}</p>
      <p>{product.stock}</p>
      <ItemCount stock={product.stock} onAdd={onAdd}/>
    </div>
  )
}

export default Item
