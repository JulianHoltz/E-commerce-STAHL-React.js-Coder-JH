import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import {getProducts} from './mock/data'
import {useParams} from 'react-router-dom';
import Loader from './Loader';
import {db} from '../services/firebase'
import {collection, getDocs, query, where} from 'firebase/firestore'



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



//PROMESA DATOS LOCALES
//   //UseEffect con array de dependencias vacio "[]", es decir que se ejecute una unica vez
//   //PREGUNTA, se me ejecuta doble, por que???
//  useEffect(() => {
//   setLoader(true);
//   //console.log(getProducts(), 'esto es la promesa cruda')
//   getProducts()
//   .then((res) => {
//     if(categoryId){
//       setProductsList(res.filter((item) => item.category === categoryId));
//     } else {
//       setProductsList(res);
//     }
//   }) //Si sale todo bien guardo la info en el estado
//   .catch((error) => console.log(error, 'y esto seria el error')) //si falla atrapo el error
//   .finally(()=> setLoader(false))
//   },[categoryId]) //Aca seteo que este atento a ver si cambia el categoryId tiene que actualizar

//  //console.log(productsList); //productsList ahora tiene Data

  return (
    <div className="flex flex-col bg-slate-800 w-full min-h-80 flex items-center justify-center">
      <h1 className="text-xl font-bold">{greeting}{categoryId && <span>{categoryId}</span>}</h1>
      {loader
      ? <Loader/>
      : <ItemList productsList = {productsList}/>}
    </div>
  );
};

export default ItemListContainer;

