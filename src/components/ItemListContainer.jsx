import ItemCount from './itemCount';

const ItemListContainer = ({ greeting }) => {

  const onAdd = (cantidad) => {
    alert(`Agregaste ${cantidad} al carritoS`)
  }
  return (
    <div className="flex flex-col bg-slate-300 w-full min-h-80 flex items-center justify-center">
      <h1 className="text-xl font-bold">{greeting}</h1>
      {/* este componente despues lo sacamos */}
      <ItemCount stock={8} onAdd={onAdd}/>
    </div>
  );
};

export default ItemListContainer;

