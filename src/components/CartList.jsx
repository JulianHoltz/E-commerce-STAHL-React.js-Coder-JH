import React from 'react';
import {useContext} from 'react';
import {CartContext} from '../context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';


const CartList = () => {
    const {cart, clear, cartTotal} = useContext(CartContext)
  return (
    <div>
      <table>
      <thead>
        <tr>
          <th scope='col'>#id</th>
          <th scope='col'>img</th>
          <th scope='col'>name</th>
          <th scope='col'>quantity</th>
          <th scope='col'>Un price</th>
          <th scope='col'>Total price</th>
          <th scope='col'>action</th>
        </tr>
      </thead>
      <tbody>
      {cart.map((compra)=> <CartItem compra={compra} key={compra.id}/>)}
      </tbody>
      <tfoot>
        <tr>
          <td>Total: ${cartTotal()}</td>
        </tr>
      </tfoot>
    </table>
    <button onClick={clear}>Empty Cart</button>
    <Link to='/checkout'>Go to pay</Link>
    </div>
  )
}

export default CartList