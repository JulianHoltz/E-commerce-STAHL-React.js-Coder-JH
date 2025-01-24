import { useEffect, useState } from 'react';
import ItemCount from './itemCount';
import ItemList from './ItemList';
import {getProducts} from './mock/data'
import FetchConteiner from './FetchConteiner';
import {useParams} from 'react-router-dom';
import { SiPanasonic } from 'react-icons/si';



const ItemListContainer = ({ greeting }) => {
  const [productsList, setProductsList] = useState([]);
  const {categoryId} = useParams();
  


  //UseEffect con array de dependencias vacio "[]", es decir que se ejecute una unica vez
  //PREGUNTA, se me ejecuta doble, por que???
 useEffect(() => {
  console.log(getProducts(), 'esto es la promesa cruda')
  getProducts()
  .then((res) => {
    if(categoryId){
      setProductsList(res.filter((item) => item.category === categoryId));
    } else {
      setProductsList(res);
    }
  }) //Si sale todo bien guardo la info en el estado
  .catch((error) => console.log(error, 'y esto seria el error')) //si falla atrapo el error
  },[categoryId]) //Aca seteo que este atento a ver si cambia el categoryId tiene que actualizar

 console.log(productsList); //productsList ahora tiene Data

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

