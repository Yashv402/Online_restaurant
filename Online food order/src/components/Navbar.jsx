import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="max-w-[1640px] max-h-[60px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="cursor-pointer">
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
      <div className="bg-black/80 fixed w-full h-screen z-10  left-0">

        {/* Side drawer menu */}
        <div className="fixed top-0 left-0 w-[300px] h-screen bg-white">

        </div>
      </div>
    </div>
  );
};

export default Navbar;
