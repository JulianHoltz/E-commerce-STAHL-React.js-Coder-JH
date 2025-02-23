import React from 'react'
import {useContext} from 'react'
import {CartContext} from '../context/CartContext'

const CartItem = ({compra}) => {
    const {removeItem} = useContext(CartContext);
  return (
    <tr>
      <td>{compra.id}</td>
      <td><img className="w-12 h-12 object-cover" src={compra.img} alt={compra.alt} /></td>
      <td>{compra.name}</td>
      <td>{compra.quantity}</td>
      <td>{compra.price}</td>
      <td>${compra.quantity * compra.price}</td>
      <td>
        <button onClick={()=>removeItem(compra.id)}>❌</button>
      </td>
    </tr>
  )
}

export default CartItem