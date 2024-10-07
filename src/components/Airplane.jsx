import React from 'react'
import emiLogo from '../assets/images/emirates.png';
import luftLogo from '../assets/images/bird.png';
import { LuDot } from "react-icons/lu";
const Airplane = () => {
  return (
       <div>
         <div className=" flex items-center w-10/12 border-2 border-zinc-100 rounded-md">
        {/* firstplane */}
       <div className="w-9/12 pr-0 pl-4 ">
       {/*  planes*/}
       <div className="flex  justify-between w-11/12 pr-0">
       {/* logo and time */}
       <div className="flex items-center">
        <img src={emiLogo} alt="Logo" className="h-8 w-12" />
        {/* brand name and time */}
        <div className="ml-8">
            {/* brand name */}
            <div className="flex w-max items-center">
              <p className="text-gray-400 mr-0 pr-0">Emirates</p>
              <LuDot className="text-gray-400 pr-0 mr-0 text-xl border-none" />
              <p className="text-gray-400 pl-0 ml-0 text-md">At</p>
              <p className="text-gray-400 pl-1">4334</p>
            </div>
            {/* time */}
            <div>
              <h1 className="text-black text-xl">9:45AM-11:45AM</h1>
            </div>
        </div>
       </div>
       {/* duration and stops */}
       <div className="  flex items-center ">
        {/* duration */}
        <div className="text-xl mr-8">
            <h1 className=" text-gray-400 ">CDG-DXD</h1>
            <h1 className=" text-black">2h 10min</h1>
        </div>
        {/* stops */}
        <div className="ml-16 ">
        <h1 className="text-md text-gray-400 "></h1>
        <h1 className="text-xl text-black">1Stop</h1>
        </div>
       </div>
       </div>
       {/*  second plane */}
       <div className="mt-8">
       <div className="flex  justify-between w-11/12">
       {/* logo and time */}
       <div className="flex items-center">
        <img src={luftLogo} alt="Logo" className="h-12 w-12" />
        {/* brand name and time */}
        <div className="ml-8">
            {/* brand name */}
            <div className="flex w-max items-center">
              <p className="text-gray-400 mr-0 pr-0">Lufthansa</p>
              <LuDot className="text-gray-400 pr-0 mr-0 text-xl border-none" />
              <p className="text-gray-400 pl-0 ml-0 text-md">At</p>
              <p className="text-gray-400 pl-1">4334</p>
            </div>
            {/* time */}
            <div className="flex">
              <h1 className="text-black text-xl">9:45AM-11:45AM </h1>
              <p className="text-red-700 text-sm font-semibold ml-2">+1 day</p>
            </div>
        </div>
       </div>
       {/* duration and stops */}
       <div className="  flex items-center">
        {/* duration */}
        <div className="text-xl mr-8">
            <h1 className=" text-gray-400 ">CDG-DXD</h1>
            <h1 className=" text-black">4h 20min</h1>
        </div>
        {/* stops */}
        <div className="ml-16 items-end">
        <h1 className="text-md text-gray-400 ">lesbon</h1>
        <h1 className="text-xl text-black">2 Stop</h1>
        </div>
       </div>
       </div>
       </div>
       </div>
       {/*  price */}
       <div className="border-l-2 border-zinc-100">
       <div className="mt-8 p-4 pr-0">
        <h3 className="text-gray-400 text-xl">From</h3>
        <h1 className="text-2xl teaxt-black">AED 2456.90</h1>
        <button className="bg-customGreen text-white w-52 mt-4 h-12 rounded-md">Select</button>
       </div>
       </div>
       </div>
       {/* plane-2 */}
       <div className=" flex items-center w-10/12 border-2 border-zinc-100 rounded-md mt-8 py-4">
        {/* planes */}
       <div className="w-9/12 pr-0 pl-4 ">
       {/*  first plane */}
       <div className="flex  justify-between w-11/12 pr-0">
       {/* logo and time */}
       <div>
        <h1 className="text-gray-500 font-medum text-medium mb-2 mr-36">thu 25 Jun</h1>
       <div className="flex items-center">
        <img src={emiLogo} alt="Logo" className="h-8 w-12" />
        {/* brand name and time */}
        <div className="ml-8">
            {/* brand name */}
            <div className="flex w-max items-center">
              <p className="text-gray-400 mr-0 pr-0">Emirates</p>
              <LuDot className="text-gray-400 pr-0 mr-0 text-xl border-none" />
              <p className="text-gray-400 pl-0 ml-0 text-md">At</p>
              <p className="text-gray-400 pl-1">4334</p>
            </div>
            {/* time */}
            <div className="flex">
              <h1 className="text-black text-xl">9:45AM-11:45AM </h1>
            </div>
        </div>
       </div>
       </div>
       {/* duration and stops */}
       <div className="  flex items-center mt-4">
        {/* duration */}
        <div className="text-xl mr-8">
            <h1 className=" text-gray-400 ">CDG-DXD</h1>
            <h1 className=" text-black">7h 10min</h1>
        </div>
        {/* stops */}
        <div className="ml-16 ">
        <h1 className="text-md text-gray-400 "></h1>
        <h1 className="text-xl text-black ">1 Stop</h1>
        </div>
       </div>
       </div>
       {/*  second plane */}
       <div className="mt-8">
       <div className="flex  justify-between w-11/12">
       {/* logo and time */}
       <div>
        <h1 className="text-gray-500 font-medum text-medium mb-2 mr-52">sat 2 Jul</h1>
       <div className="flex items-center">
        <img src={emiLogo} alt="Logo" className="h-8 w-12" />
        {/* brand name and time */}
        <div className="ml-8">
            {/* brand name */}
            <div className="flex w-max items-center">
              <p className="text-gray-400 mr-0 pr-0">Emirates</p>
              <LuDot className="text-gray-400 pr-0 mr-0 text-xl border-none" />
              <p className="text-gray-400 pl-0 ml-0 text-md">At</p>
              <p className="text-gray-400 pl-1">4334</p>
            </div>
            {/* time */}
            <div className="flex">
              <h1 className="text-black text-xl">9:45AM-11:45AM </h1>
              <p className="text-red-700 text-sm font-semibold ml-2">+1 day</p>
            </div>
        </div>
       </div>
       </div>
       {/* duration and stops */}
       <div className="  flex items-center mt-4">
        {/* duration */}
        <div className="text-xl mr-8">
            <h1 className=" text-gray-400 ">CDG-DXD</h1>
            <h1 className=" text-black">10h 20min</h1>
        </div>
        {/* stops */}
        <div className="ml-16 items-end">
        <h1 className="text-md text-gray-400 ">lesbon</h1>
        <h1 className="text-xl text-black">2 Stop</h1>
        </div>
       </div>
       </div>
       </div>
       </div>
       {/*  price */}
       <div className="border-l-2 border-zinc-100 ">
       <div className="mt-8 p-4 pr-0">
        <h3 className="text-gray-400 text-xl">From</h3>
        <h1 className="text-2xl teaxt-black">AED 1456.90</h1>
        <button className="bg-customGreen text-white w-52 mt-4 h-12 rounded-md">Select</button>
       </div>
       </div>
       
    </div>
    </div>
  )
}

export default Airplane
