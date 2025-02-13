import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import {getProducts} from './mock/data'
import FetchConteiner from './FetchConteiner';
import {useParams} from 'react-router-dom';
import {db} from './services/firebase.jsx'
import {collection, getDocs, query, where} from 'firebase/firestore'



const ItemListContainer = ({ greeting }) => {
  const [productsList, setProductsList] = useState([]);
  const {categoryId} = useParams();
  const [loader, setLoader] = useState(false);
  
  //FIREBASE
  useEffect(()=>{
    setLoader(true);
    //conectamos con la db metodo de firebase (configs, nombre de la coleccion) configs = getFirestore de firebase.jsx
    //aplico un ternario para ver si tiene categoria query(data, filtro) where("sobreQuePropiedad"? , Que.condicion? , que devuelvo)
    const productsCollection = categoryId ? query(collection(db,"products"), where("category","==", categoryId)) : collection(db,"products");
    //pedir los datos AKA documentos metodo getDocs, para traer muchos "devuelve una promesa"
    getDocs(productsCollection)
    //si a la res le pongo .docs me limpia el objeto, sino es imposible
    .then((res)=>{
      const list = res.docs.map((doc)=>{
        return {
          id:doc.id,
          ...doc.data() //metodo data me saca capas hasta el objeto que quiero
        }
      })
      setProductsList(list)
    }) //la respuesta esta fragmentada, no es un array limpio
    .catch((error)=>console.log(error))
    .finally(()=> setLoader(false))
  },[categoryId])


  //Para hacer los filtros por categoria se usan metodos de Firebase, el metodo query
  
  return (
    <div className="flex flex-col bg-slate-800 w-full min-h-80 flex items-center justify-center">
      <h1 className="text-xl font-bold">{greeting}{categoryId && <span>{categoryId}</span>}</h1>
      <FetchConteiner/>
      <ItemList productsList = {productsList}/> {/*Le paso los datos a mi componente hijo*/}
      {/* este componente despues lo sacamos */}
    </div>
  );
};

export default ItemListContainer;

