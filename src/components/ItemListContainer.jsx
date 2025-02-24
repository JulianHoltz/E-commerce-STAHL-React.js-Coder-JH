import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import Loader from './Loader';
import {db} from '../services/firebase'
import {collection, getDocs, query, where, addDoc} from 'firebase/firestore'



const ItemListContainer = ({ greeting }) => {
  const [productsList, setProductsList] = useState([]);
  const {categoryId} = useParams();
  const [loader, setLoader] = useState(false);
  
//FIREBASE
useEffect(()=>{
  setLoader(true);
  //conectarnos a la db -> Collection (base de datos, colleccion)
  const productsCollection = categoryId 
  ? query(collection(db,"products"), where("category","==",categoryId)) 
  //query es un metodo de Firebase para filtrar (donde busco, que filtro) Where(en que prop aplico, operacion, dato)
  : collection(db,"products"); 
  //Collection es un metodo de Firebase para acceder a una coleccion (conect db, nom de la collecccion)

  //pido los documentos de la colleccion
  getDocs(productsCollection)
  .then((res)=> {
    const list = res.docs.map((doc)=>{
      return {
        id:doc.id,
        ...doc.data()
      }
    })
    setProductsList(list);
  })
  .catch((error)=> console.log(error))
  .finally(()=> setLoader(false))
},[categoryId])


  return (
    <div className="flex flex-col bg-slate-800 w-full min-h-80 flex items-center justify-center">
      <h1 className="text-xl font-bold text-slate-100">{greeting}{categoryId && <span>{categoryId}</span>}</h1>
      {loader
      ? <Loader/>
      : <ItemList productsList = {productsList}/>}
    </div>
  );
};

export default ItemListContainer;

