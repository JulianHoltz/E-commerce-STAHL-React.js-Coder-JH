import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div className="text-slate-800 p-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Ups! the cart is empty...</h1>
        <h3 className="text-xl text-slate-400 mb-6">buy something dude 😒</h3>
        <Link 
          to='/' 
          className="bg-slate-900 hover:bg-slate-700 text-white px-6 py-2 rounded-lg transition-all"
        >
          Back to products
        </Link>
    </div>
  );
};

export default EmptyCart;
