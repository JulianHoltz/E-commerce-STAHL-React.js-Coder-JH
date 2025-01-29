import React, { useEffect, useState } from 'react'
import { getOneProduct } from './mock/data'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom';

// Ver grabacion que falta usar el ID para cuando entras al producto clase 9 NAVEGACION, despues del breack

const ItemDetailConteiner = () => {
const [item, setItem] = useState({})
const {itemId} = useParams(); //Obtenemos el id desde la ruta "como si fuese HTTP"

useEffect(() => {
    getOneProduct(itemId)
    .then((res) => setItem(res))
    .catch((error) => console.log(error))
},[itemId]); //al poner itemID entre el corchete el useEffect se ejecuta cada vez quecambie su valor(itemID)

  return (
    <ItemDetail item={item}/>
  )
}

export default ItemDetailConteiner
