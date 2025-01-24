import React from 'react'

const ItemDetail = () => {
  return (
    <div>
        <h1>Detalle de: {Item.name}</h1>
        <img src={Item.img} alt={Item.alt} />
        <p>{item.description}</p>
    </div>
  )
}

export default ItemDetail