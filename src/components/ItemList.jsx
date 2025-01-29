import React from 'react'
import Item from './Item'

const ItemList = ({productsList}) => { {/* Desestructuro lo recibido del padre */}
    return (
        <div className='flex justify-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {productsList.map((product) => <Item product={product} key={product.id}/>)}
            </div>
        </div>
    )
}

export default ItemList