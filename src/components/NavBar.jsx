import CartWidget from './CartWidget';
import DropDown from './DropDown';
import { useEffect, useState } from "react";
import { GiAnvil } from "react-icons/gi";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const location = useLocation();

  function openMenu() {
    setToggle(true);
  }

  function closeMenu() {
    setToggle(false);
  }

  function toggleDropdown() {
    setDropdown(!dropdown);
  }

  useEffect(() => { //No puedo creer que me salio Jaja
    setDropdown(false);
  },[location.pathname])


  return (
    <>
      <div className="text-slate-100 flex items-center justify-between p-10 lg:flex-row">
      <NavLink to='/'>
        <div className="font-mono text-3xl flex items-center tracking-wider">
          <GiAnvil className="text-4xl mr-4" />
          STAHL
        </div>
        </NavLink>
        <div className="space-x-4 ssm:hidden lg:block">
          <NavLink
            to='/'
            className="relative text-xl transition-all duration-300 group"
          >
            Home
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <NavLink
            to="/aboutUs"
            className="relative text-xl transition-all duration-300 group"
          >
            About Us
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
          <div className="relative inline-block">
            <button
              onClick={toggleDropdown}
              className="relative text-xl transition-all duration-300 group focus:outline-none flex items-center"
            >
              Products
              <IoIosArrowDown className="ml-1" />
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
            {dropdown && <DropDown />}
          </div>
          <NavLink
            to="/ContactUs"
            className="relative text-xl transition-all duration-300 group"
          >
            Contact Us
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        </div>
        <CartWidget />
        <div className="ssm:block lg:hidden">
          {toggle ? (
            <RxCross2 onClick={closeMenu} className="text-slate-100" size={50} />
          ) : (
            <div onClick={openMenu}>
              <FiMenu className="text-slate-100" size={50} />
            </div>
          )}
        </div>
      </div>

      <div className="ssm:block lg:hidden">
        {toggle ? (
          <div className="flex justify-between ml-10">
            <ul>
              <li className="text-slate-100 hover:bg-slate-800 text-xl mb-2">
                Home
              </li>
              <li className="text-slate-100 hover:bg-slate-800 text-xl mb-2">
                About Us
              </li>
              <li className="text-slate-100 hover:bg-slate-800 text-xl mb-2">
                Products
              </li>
              <li className="text-slate-100 hover:bg-slate-800 text-xl mb-2">
                Contact Us
              </li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default NavBar;
