import { useContext } from "react";
import { IoCart } from "react-icons/io5";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {

  const {cart} = useContext(CartContext)
  return (
    <div className="relative inline-block">
      <IoCart size={40} className="text-slate-100" />
      <span className="absolute -bottom-1 -right-2 text-xs bg-blue-400 text-white rounded-full border border-slate-100 px-1.5 py-0.5">
        {cart.length}
      </span>
    </div>
  );
};

export default CartWidget;
