import React, { useEffect, useState } from 'react'
import { getOneProduct } from './mock/data'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom';

// Ver grabacion que falta usar el ID para cuando entras al producto clase 9 NAVEGACION, despues del breack

const ItemDetailConteiner = () => {
const [item, setItem] = useState({})

useEffect(() => {
    getOneProduct('001')
    .then((res) => setItem(res))
    .cath((error) => console.log(error))
},[])

  return (
    <ItemDetail/>
  )
}

export default ItemDetailConteiner
