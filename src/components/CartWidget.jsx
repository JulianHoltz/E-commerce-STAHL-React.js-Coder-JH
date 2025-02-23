import { useContext } from "react";
import { IoCart } from "react-icons/io5";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  //ACa sale un error... pero funciona igual REVISAR
  const { cartQuantity } = useContext(CartContext);
  console.log(cartQuantity());
  return (
    <div className="relative inline-block">
      <IoCart size={40} className="text-slate-100" />

      {cartQuantity() > 0 && (
        <span className="absolute -bottom-1 -right-2 text-xs bg-blue-400 text-white rounded-full border border-slate-100 px-1.5 py-0.5">
          {cartQuantity()}
        </span>
      )}
    </div>
  );
};

export default CartWidget;
