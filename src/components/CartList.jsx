import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const CartList = () => {
  const { cart, clear, cartTotal } = useContext(CartContext);

  return (
    <div className="text-slate-800 p-10">
      <table className="w-full border-collapse border border-slate-600">
        <thead>
          <tr className="bg-slate-800 text-slate-100">
            <th className="border border-slate-600 px-4 py-2">#id</th>
            <th className="border border-slate-600 px-4 py-2">Img</th>
            <th className="border border-slate-600 px-4 py-2">Name</th>
            <th className="border border-slate-600 px-4 py-2">Quantity</th>
            <th className="border border-slate-600 px-4 py-2">Un price</th>
            <th className="border border-slate-600 px-4 py-2">Total price</th>
            <th className="border border-slate-600 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((compra) => (
            <CartItem compra={compra} key={compra.id} />
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-slate-800">
            <td colSpan="7" className="border border-slate-600 px-4 py-2 text-right font-bold">
              Total: ${cartTotal()}
            </td>
          </tr>
        </tfoot>
      </table>
      <div className="mt-6 flex space-x-4">
        <button
          onClick={clear}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-all"
        >
          Empty Cart
        </button>
        <Link
          to='/checkout'
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-all"
        >
          Go to Pay
        </Link>
      </div>
    </div>
  );
};

export default CartList;
