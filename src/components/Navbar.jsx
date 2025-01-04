import { useContext, useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartProvider";
import Cart from "./Cart";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { SearchContext } from "../context/SearchContext";
import { toast, ToastContainer } from "react-toastify";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { cartItems } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const handleModel = () => {
    setShowModal(!showModal);
  };
    const { searchQuery, setSearchQuery } = useContext(SearchContext)
    const handleSearch = (e) => {
      setSearchQuery(e.target.value);
    };

  return (
    <div className="bg-teal-900 flex items-center h-20 fixed z-1 px-5 text-white w-full shadow-slate-800">
      <Link to="/" className="no-underline lg:flex-none flex-1">
        <h1 className="lg:text-2xl text-xl mt-0.5 font-bold text-white">
          T-Store
        </h1>
      </Link>

      {/* Desktop & Tablet Navigation */}
      <ul className="hidden lg:flex lg:mt-3 w-full justify-center items-center">
        <li className="p-4 rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "active-nav text-black no-underline duration-300 font-bold"
                : "text-white no-underline duration-300"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="p-4 rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive
                ? "active-nav text-black no-underline duration-300 font-bold"
                : "text-white no-underline duration-300"
            }
          >
            Shop
          </NavLink>
        </li>
        <li className="p-4 rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "active-nav text-black font-bold no-underline duration-300"
                : "text-white no-underline duration-300"
            }
          >
            About
          </NavLink>
        </li>
        <li className="p-4 rounded-xl m-2 cursor-pointer duration-300 hover:text-black">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "active-nav text-black font-bold no-underline duration-300"
                : "text-white no-underline duration-300"
            }
          >
            Contact
          </NavLink>
        </li>

        {/* Full-width Search Bar */}
      </ul>

      <div className="w-full max-w-sm min-w-[200px] lg:block md:block hidden">
        <div className="relative">
          <input
            onChange={handleSearch}
            value={searchQuery}
            className="w-full bg-gray-900 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-2xl pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Search"
          />
          <div className="absolute top-1 right-1 flex items-center rounded bg-slate-800 py-2 px-2.5 text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            <FaSearch />
          </div>
        </div>
      </div>

      {/* Shopping Cart Icon and Login Button */}
      <div className="flex items-center text-white ml-auto ms-4">
        {!showModal && (
          <div
            className="relative py-2 cursor-pointer me-4"
            onClick={handleModel}
          >
            <div className="t-0 absolute left-2">
              <p className="flex h-1 w-1 items-center justify-center rounded-full bg-black p-2.5 text-xs text-white">
                {cartItems.length}
              </p>
            </div>

            <FaCartShopping className="mt-2 h-7 w-6" size={30} />
          </div>
        )}

        <button
          onClick={() => toast.warning("Sorry! login អត់បានធ្វើទេ")}
          className="border-t-indigo-800 bg-black rounded-xl p-2 px-4 hidden lg:block"
        >
          Login
        </button>
        <ToastContainer />
      </div>

      {/* Mobile & Tablet Navigation Icon */}
      <div onClick={handleNav} className="block lg:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile & Tablet Navigation Menu */}
      <ul
        className={`fixed top-0 left-0 w-[60%] h-full bg-teal-900 border-r border-r-gray-900 ease-in-out duration-500 lg:hidden ${
          nav ? "left-0" : "left-[-100%]"
        }`}
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-white m-4">
          LA Collection
        </h1>
        {/* Mobile Navigation Items */}

        <li className="p-4 border-b rounded-xl duration-300 hover:text-black cursor-pointer border-gray-600">
          <Link to="/" className="no-underline text-white">
            Home
          </Link>
        </li>
        <li className="p-4 border-b rounded-xl duration-300 hover:text-black cursor-pointer border-gray-600">
          <Link to="/shop" className="no-underline text-white">
            Shop
          </Link>
        </li>
        <li className="p-4 border-b rounded-xl duration-300 hover:text-black cursor-pointer border-gray-600">
          <Link to="/about" className="no-underline text-white">
            About
          </Link>
        </li>
        <li className="p-4 border-b rounded-xl duration-300 hover:text-black cursor-pointer border-gray-600">
          <Link to="/contact" className="no-underline text-white">
            Contact
          </Link>
        </li>
        {/* <li className="p-4 border-b rounded-xl duration-300 cursor-pointer border-gray-600">
          <button
            onClick={() => toast.warning("Sorry! login អត់បានធ្វើទេ")}
            className="border-t-indigo-800 bg-black rounded-xl p-2 px-4"
          >
            Login
          </button>
          <ToastContainer />
        </li> */}
      </ul>

      <Cart showModal={showModal} handlModel={handleModel} />
    </div>
  );
};


export default Navbar;
