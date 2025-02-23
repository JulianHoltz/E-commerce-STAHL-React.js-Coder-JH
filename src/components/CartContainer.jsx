import React from 'react'
import { useContext } from 'react';
import EmptyCart from './EmptyCart';
import { CartContext } from '../context/CartContext';
import CartList from './CartList';

export const CartContainer = () => {
    const {cart} = useContext(CartContext)
  return (
    <div>
        {cart.length ? <CartList/> : <EmptyCart/>}
    </div>
  )
}

export default CartContainer;
