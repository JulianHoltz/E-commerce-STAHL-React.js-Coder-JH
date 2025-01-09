import CartWidget from './CartWidget'
import { useState } from "react";
import { GiAnvil } from "react-icons/gi";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";

const NavBar = () => {
    const [toggle, setToggle] = useState(false);
  
    function openMenu(){
      setToggle(true);
    }
  
    function closeMenu(){
      setToggle(false);
    }
  
  
    
    return (
      <>
        <div className="text-slate-100 flex items-center justify-between p-10 lg:flex-row">
          <div className="font-mono text-3xl flex items-center tracking-wider">
          < GiAnvil className="text-4xl mr-4"/><a href="#">STAHL</a>
          </div >
          <div className="space-x-4 ssm:hidden lg:block">
            <a
              href="#"
              className="relative text-xl transition-all duration-300 group"
            >
              Home
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="relative text-xl transition-all duration-300 group"
            >
              About Us
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="relative text-xl transition-all duration-300 group"
            >
              Products
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#"
              className="relative text-xl transition-all duration-300 group"
            >
              Contact Us
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          <CartWidget/>
          <div className="ssm:block lg:hidden">
            {toggle ? (
              <RxCross2 onClick={closeMenu} className="text-slate-100" size={50}/>
            ):(<div onClick={openMenu}><FiMenu onClick={openMenu} className="text-slate-100" size={50}/></div>)}
          </div>
        </div>
        
        <div className="ssm:block lg:hidden">
          {toggle ? (
            <div className="flex justify-between ml-10">
            <ul>
              <li className="text-slate-100 hover:bg-slate-800 text-xl mb-2">Home</li>
              <li className="text-slate-100 hover:bg-slate-800 text-xl mb-2">About Us</li>
              <li className="text-slate-100 hover:bg-slate-800 text-xl mb-2">Products</li>
              <li className="text-slate-100 hover:bg-slate-800 text-xl mb-2">Contact Us</li>
            </ul>
          </div>
          ):(
            <div></div>
          )}
          
        </div>
      </>
    );
}

export default NavBar
