import React from 'react';
import { FiSearch } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';
const Navbar= () => {
  return (
    <div className="h-24 w-screen flex justify-around items-center">
        <button>
        <div className="flex items-center border-2 border-gray-200 rounded-full p-4 h-12 w-max ml-18">
       <div className=" flex items-center border-r-2 border-gray-200 py-1 mx-2 px-2">
        <h2 className="text-black font-medium text-xl">CDG </h2>
        <p className="text-gray-600 text-lg font-lighter ml-2">Parles Charles De Gu</p>
      </div>
      <div className=" flex items-center border-r-2 border-gray-200 py-1 mx-2 px-2">
        <h2 className="text-black font-medium text-xl">DXD </h2>
        <p className="text-gray-600 text-lg font-lighter ml-2">Dubai International...</p>
      </div>
      <div className=" flex items-center border-r-2 border-gray-200 py-1 mx-2 px-3">
        <h2 className="text-black font-medium text-xl ml-1 ">June</h2>
        <h2 className="text-black font-medium text-xl ml-1">25-</h2>
        <h2 className="text-black font-medium text-xl ml-1">Jul</h2>
        <h2 className="text-black font-medium text-xl ml-1">2</h2>
      </div>
      <div className=" flex items-center m-2 h-8 w-8 p-2 flex justify-center items-center bg-zinc-300 rounded-full"><FiSearch />
      </div>
    </div>
        </button>
    <Link to="/SearchPage" className=" flex items-center m-2 h-12 w-12 p-2 flex justify-center items-center border border-gray-500 bg-neutral rounded-full"><RxCross1 />
    </Link>
    </div>
  );
};

export default Navbar;

