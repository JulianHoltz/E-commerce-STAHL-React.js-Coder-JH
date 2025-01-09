const ItemListContainer = ({ greeting }) => {
  return (
    <div className="bg-slate-300 w-full min-h-80 flex items-center justify-center">
      <h1 className="text-xl font-bold">{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;

