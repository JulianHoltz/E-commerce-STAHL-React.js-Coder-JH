import React, { useContext, useState } from 'react'
import ItemCount from './itemCount';
import { CartContext } from '../context/CartContext';
import { Link } from "react-router-dom";



const ItemDetail = ({item}) => {
  const {cart, addItem} = useContext(CartContext) //Llamo a los elementos del CartContext
  const [purchase, setPurchase] = useState(false)

  if (!item || Object.keys(item).length === 0) {
    return <h2 className="text-center text-gray-500">Loading product...</h2>;
  }
  
  const onAdd = (cantidad) => {
    setPurchase(true)
    addItem(item, cantidad)// Hay que definir productDetail todavia...
    
  }
  
 
  console.log(cart, 'carrito')

  return (
    <div className='flex justify-center m-4'>
      <div className='max-w-80 flex flex-col justify-center border-solid border-4 border-slate-300 rounded-2xl items-center p-4 bg-slate-100'>
          <h1>Detail: {item.name}</h1>
          <img className='max-w-' src={item.img} alt={item.alt} />
          <div className='flex gap-4'>
            <p>Stock:{item.stock}</p>
            <p>U$D {item.price}</p>
          </div>
          <p>Description: {item.description}</p>
          {!purchase 
          ? <ItemCount stock={item.stock} onAdd={onAdd}/>
          : <Link className='bg-slate-900 text-slate-100 min-w-[100px]  rounded-full items-center p-2 bg-slate-100 hover:bg-slate-500' to='/cart'>go to cart</Link>}
          
      </div>
    </div>
  )
}

export default ItemDetail