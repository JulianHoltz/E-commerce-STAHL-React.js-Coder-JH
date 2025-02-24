import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import {Link, useParams} from 'react-router-dom';
import Loader from './Loader';
import {db} from '../services/firebase'
import {collection, getDoc, doc} from 'firebase/firestore'



const ItemDetailConteiner = () => {
const [item, setItem] = useState({})
// const {itemId} = useParams(); //Obtenemos el id desde la ruta "como si fuese HTTP"
const [loader, setLoader] = useState(false);
const [invalidItem, setInvalidItem] = useState(false);
const {itemId} = useParams();

//FIREBASE
useEffect(()=>{
  setLoader(true);
  //conectar con la db y entrar en la coleccion
  const productsCollection = collection(db,"products");
  //referencia que doc tiene que traer
  const docRef = doc(productsCollection, itemId)
  //trae el doc de la referencia
  getDoc(docRef)
  .then((res)=> { //Valido si existe el doc o no en la DB, "cuando no existe me devuelve null"
    if(res.data()){
      setItem({id:res.id, ...res.data()});
    } else {
      setInvalidItem(true);
    }
  })
  .catch((error)=>console.log(error))
  .finally(()=>setLoader(false))
},[])


//Return anticipado por si el producto no existe en la DB
  if(invalidItem){
    return(
      <div>
        <h2>The Item does not exist!</h2>
        <Link to='/'>Back to home</Link>
      </div>
    )
  }

  return (
    <>
    {loader 
    ? <Loader/> 
    : <ItemDetail item={item}/>}
    </>
  )
}

export default ItemDetailConteiner
