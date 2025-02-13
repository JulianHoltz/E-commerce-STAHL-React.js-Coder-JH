import React, { useEffect, useState } from 'react'
import { getOneProduct } from './mock/data'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom';
import {db} from './services/firebase'
import {collection, doc, getDoc} from 'firebase/firestore'

// Ver grabacion que falta usar el ID para cuando entras al producto clase 9 NAVEGACION, despues del breack

const ItemDetailConteiner = () => {
const [item, setItem] = useState({})
const {itemId} = useParams(); //Obtenemos el id desde la ruta "como si fuese HTTP"
const [loading, setLoading] = useState(false);
const [invalidItem, setInvalidItem] = useState(false);
const {id} = useParams();

//FIREBASE
useEffect(()=>{
  setLoading(true);
  //conectar con la collection
  const productsCollection = collection(db, "products");
  //crear una referencia
  const docRef = doc(productsCollection, id);
  //treaer el documento
  getDoc(docRef)
  .then((res) =>{
    if(res.data()){
      setInvalidItem(true);
    }else{
      setInvalidItem(true);
    }
  })
  .catch(error)
},[])


  if(invalidItem){
    return <div>
      <h2>EL item no existe</h2>
      {/* aca estaria bien un link a home */}
    </div>
  }

  return (
    <ItemDetail item={item}/>
  )
}

export default ItemDetailConteiner
