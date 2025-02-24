import React from 'react';
//import ItemCount from './itemCount';
import {Link} from 'react-router-dom';

export const Item = ({product}) => {

  return (
    <div className='max-w-64 flex flex-col justify-center border-solid border-4 border-slate-300 rounded-2xl items-center p-4 bg-slate-100'>
      {/* <p>{product.id}</p> */}
      <p className='font-medium'>{product.name}</p>
      <img className='aspect-square rounded-2xl' src={product.img} alt={product.alt} />
      <p>AR$ {product.price}</p>
      {/* <p>{product.category}</p> */}
      <button className='bg-slate-900 text-slate-100 min-w-[100px]  rounded-full items-center p-2 bg-slate-100 hover:bg-slate-500'><Link to={`/item/${product.id}`}>Ver Mas</Link></button>
      {/* <ItemCount stock={product.stock} onAdd={onAdd}/> */}

    </div>
  )
}

export default Item
