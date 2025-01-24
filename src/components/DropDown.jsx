import { NavLink } from "react-router-dom";

const DropDown = () => {
  return (
    <ul className="absolute left-0 mt-2 w-40 bg-slate-800 text-slate-100 rounded-md shadow-lg">
      <li className="px-4 py-2 hover:bg-slate-700">
        <NavLink to="/category/algo">Rebars</NavLink>
      </li>
      <li className="px-4 py-2 hover:bg-slate-700">
        <NavLink to="/category/Nuevos">Beams</NavLink>
      </li>
      <li className="px-4 py-2 hover:bg-slate-700">
        <NavLink to="/category/otro">steel sheets</NavLink>
      </li>
      <li className="px-4 py-2 hover:bg-slate-700">
        <NavLink to="/category/queseIo">PowerTools</NavLink>
      </li>
    </ul>
  );
};

export default DropDown;

