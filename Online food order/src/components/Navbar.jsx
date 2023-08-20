import { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiFillHeart } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { TbTruckDelivery } from "react-icons/tb";
import { FaWallet, FaUserFriends } from "react-icons/fa";
import { BiSolidHelpCircle } from "react-icons/bi";
import { IoPricetagSharp } from "react-icons/io5";
import { FiThumbsUp } from "react-icons/fi"

const Navbar = () => {

  const [nav,setNav] = useState(false);
  return (
    <div className="max-w-[1640px] max-h-[60px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div onClick={()=> setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
        <div className="flex justify-center items-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl px-2">
            Best <span className="font-bold">Eats</span>
          </h2>
          <div className="hidden md:flex item-center bg-gray-200 rounded-full p-1 text-[14px] justify-center items-center">
            <p className="bg-black text-white p-2 rounded-full">Delivery</p>
            <p className="p-2">Pickup</p>
          </div>
        </div>
      </div>

      {/* Search bar  */}
      <div className="flex rounded-full bg-gray-200 items-center sm:w-[400px] md:w-[300px] lg:w-[500px] px-2">
        <AiOutlineSearch size={20} className="text-gray-500"/>
        <input type="text" placeholder="Search food" className="p-2 bg-transparent focus:outline-none text-gray-500 w-full"/>
      </div>

      {/* Cart button */}
      <button className="bg-black text-white hidden md:flex justify-center rounded-full items-center " ><BsFillCartFill size={20}/> Cart</button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav?  <div className="bg-black/80 fixed w-full h-screen z-10  left-0"></div>: ''}

        {/* Side drawer menu */}
        <div className={nav?'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300': 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-1000'}>
          <RxCross1 size={20} onClick={()=> setNav(!nav)} className="absolute right-2 top-2 cursor-pointer"/>
          <h2 className="text-2xl p-4">Best <span className="font-bold">Eats</span></h2>
          <nav>
            <ul className="px-6 py-3">
              <li className="flex items-center py-2.5"><TbTruckDelivery size={25} className="mr-3"/> <span>Orders</span> </li>
              <li className="flex items-center py-2.5"><AiFillHeart size={25} className="mr-3"/> <span>Favorites</span> </li>
              <li className="flex items-center py-2.5"><FaWallet size={25} className="mr-3"/> <span>Wallet</span> </li>
              <li className="flex items-center py-2.5"><BiSolidHelpCircle size={25} className="mr-3"/> <span>Help</span> </li>
              <li className="flex items-center py-2.5"><IoPricetagSharp size={25} className="mr-3"/> <span>Promotions</span> </li>
              <li className="flex items-center py-2.5"><FiThumbsUp size={25} className="mr-3"/> <span>Best One</span> </li>
              <li className="flex items-center py-2.5"><FaUserFriends size={25} className="mr-3"/> <span>Invite Friends</span> </li>
            </ul>
          </nav>
        </div>
    </div>
  );
};

export default Navbar;
