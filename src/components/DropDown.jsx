const DropDown = () => {
  return (
    <ul className="absolute left-0 mt-2 w-40 bg-slate-800 text-slate-100 rounded-md shadow-lg">
      <li className="px-4 py-2 hover:bg-slate-700">
        <a href="#">Rebars</a>
      </li>
      <li className="px-4 py-2 hover:bg-slate-700">
        <a href="#">Beams</a>
      </li>
      <li className="px-4 py-2 hover:bg-slate-700">
        <a href="#">steel sheets</a>
      </li>
      <li className="px-4 py-2 hover:bg-slate-700">
        <a href="#">PowerTools</a>
      </li>
    </ul>
  );
};

export default DropDown;
