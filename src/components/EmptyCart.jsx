import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div>
        <h1>Ups! Tu carrito esta vacio... </h1>
        <h3>Compra algo Rata 😒</h3>
        <Link to='/'>Volver a Productos</Link>
    </div>
  )
}

export default EmptyCart