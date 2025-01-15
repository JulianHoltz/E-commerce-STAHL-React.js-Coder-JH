import { useEffect, useState } from 'react';
import ItemCount from './itemCount';
import ItemList from './ItemList';
import {getProducts} from './mock/data'


const ItemListContainer = ({ greeting }) => {
  const [productsList, setProductsList] = useState([]);
  


  //UseEffect con array de dependencias vacio "[]", es decir que se ejecute una unica vez
  //PREGUNTA, se me ejecuta doble, por que???
 useEffect(() => {
  console.log(getProducts(), 'esto es la promesa cruda')
  getProducts()
  .then((res) => setProductsList(res)) //Si sale todo bien guardo la info en el estado
  .catch((error) => console.log(error, 'y esto seria el error')) //si falla atrapo el error
 },[])

 console.log(productsList); //productsList ahora tiene Data

  return (
    <div className="flex flex-col bg-slate-300 w-full min-h-80 flex items-center justify-center">
      <h1 className="text-xl font-bold">{greeting}</h1>
      <ItemList productsList = {productsList}/> {/*Le paso los datos a mi componente hijo*/}
      {/* este componente despues lo sacamos */}
    </div>
  );
};

export default ItemListContainer;

