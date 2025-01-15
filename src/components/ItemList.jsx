import React from 'react'
import Item from './Item'

const ItemList = ({productsList}) => { {/* Desestructuro lo recibido del padre */}
    return (
        <div className='flex between space-x-4'>
            {productsList.map((product) => <Item product={product} key={product.id}/>)}
        </div>
    )
}

export default ItemList