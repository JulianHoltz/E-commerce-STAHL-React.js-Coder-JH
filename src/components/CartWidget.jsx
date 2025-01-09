import { IoCart } from "react-icons/io5";

const CartWidget = () => {
  return (
    <div className="relative inline-block">
      <IoCart size={40} className="text-slate-100" />
      <span className="absolute -bottom-1 -right-2 text-xs bg-blue-400 text-white rounded-full border border-slate-100 px-1.5 py-0.5">
        {1}
      </span>
    </div>
  );
};

export default CartWidget;
