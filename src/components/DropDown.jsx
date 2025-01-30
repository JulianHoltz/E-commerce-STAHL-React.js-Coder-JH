import { NavLink } from "react-router-dom";

const DropDown = () => {
  return (
    <ul className="absolute left-0 mt-2 w-40 bg-slate-800 text-slate-100 rounded-md shadow-lg">
      <NavLink to={`/category/Rebars`}><li className="px-4 py-2 hover:bg-slate-700">
        Rebars
      </li></NavLink>
      <NavLink to="/category/Beams"><li className="px-4 py-2 hover:bg-slate-700">
        Beams
      </li></NavLink>
      <NavLink to="/category/steelShets"><li className="px-4 py-2 hover:bg-slate-700">
        steel sheets
      </li></NavLink>
      <NavLink to="/category/PowerTools"><li className="px-4 py-2 hover:bg-slate-700">
        PowerTools
      </li></NavLink>
    </ul>
  );
};

export default DropDown;

