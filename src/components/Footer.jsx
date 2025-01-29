import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="text-slate-100 flex items-center justify-around p-10 lg:flex-row">
                <div>
            <h3 className="text-xl mr-4">Other Stuff</h3>
            <div>
                <p>Something 1</p>
                <p>Something 2</p>
                <p>Something 3</p>
            </div>
        </div>
        <div>
            <h3 className="text-xl mr-4">Contact Us</h3>
            <div>
                <p>Email.Stahl@StahlSteel.com</p>
                <p>Phone. +49 0800 456855</p>
            </div>
        </div>
        <div>
            <h3 className="text-xl mr-4">Social Media</h3>
            <div className='flex flex-row'>
                <FaFacebook className="text-2xl mr-4"/>
                <AiFillInstagram className="text-2xl mr-4"/>
                <FaXTwitter  className="text-2xl mr-4"/>
            </div>
        </div>



    </div>
  )
}

export default Footer