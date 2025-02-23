import React, { useEffect, useState } from 'react'
import { getOneProduct } from './mock/data'
import ItemDetail from './ItemDetail'
import {Link, useParams} from 'react-router-dom';
import Loader from './Loader';
import {db} from '../services/firebase'
import {collection, getDoc, doc} from 'firebase/firestore'


// Ver grabacion que falta usar el ID para cuando entras al producto clase 9 NAVEGACION, despues del breack

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

//Promise Local
// useEffect(() => {
//   console.log('se ejecuta el Effect')
//   console.log('antes', itemId)
//     setLoader(true);
//     getOneProduct(itemId)
//     .then((res) => setItem(res))
//     .catch((error) => console.log(error))
//     .finally(()=> setLoader(false))
// },[itemId]); //al poner itemID entre el corchete el useEffect se ejecuta cada vez quecambie su valor(itemID)
  

//Return anticipado por si el producto no existe en la DB
  if(invalidItem){
    return(
      <div>
        <h2>El Item no existe!</h2>
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
