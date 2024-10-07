import React,{useState,useEffect}from 'react'
import gif from '../assets/rocket.png'
import spinner from '../assets/images/spinner.png'
import greentick from '../assets/images/greentick.png'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
const Loading = () => {
const navigate=useNavigate();
const [searching,setSearching]=useState(1);
const [attaching,setAttaching]=useState(3);
const [serving,setServing]=useState(3);
 const handleSearch=()=>{
  setTimeout(() => {
    setSearching(2);
    handleAttach();
  },3000);
 };
 const handleAttach=()=>{
  setAttaching(1);
  setTimeout(() => {
    setAttaching(2);
    handleServe();
  },4000);
};
const handleServe=()=>{
  setServing(1);
  setTimeout(() => {
    setServing(2);
    navigate('/FlightResults')
  },4000);
};
useEffect(() => {
  handleSearch();
}, []);

return (
    <div>
        <div className="w-full h-1 bg-gray-200">
         <Navbar />
      <div className="line-loader h-1 bg-gray-300 animate-slide-once"></div>
      <div className="flex justify-center h-svh w-svw bg-neutral-100 ">
        <div className="bg-white w-96 h-fit mt-36 rounded-xl ">
          <img src={gif} alt="animated"
        className="w-36 h-36 rounded-lg animate-bounce ml-28 mt-4" />
        {/* loading Matter */}
        <div className="ml-4 pr-8">
          {/* searching */}
        <div className="flex mb-4 items-center ml-4">
          {(searching===1 && <div className="w-5 h-5 rounded-full animate-spin">
        <img src={spinner} alt="Logo" />
      </div>) || (searching===2 &&<div className=" ">
        <img src={greentick} alt="Logo" className="object-contain w-5 h-5" />
      </div> )}
          <p className={searching==3?'text-gray-200 text-xl ml-4':'text-gray-500 text-xl ml-4'}>Searching 400+ Flights</p>
         </div>
         {/* attaching */}
         <div className="flex mb-4 items-center ml-4">
          {(attaching===1 && <div className="w-5 h-5 rounded-full animate-spin">
        <img src={spinner} alt="Logo" />
      </div>) || (attaching===2 &&<div className="">
        <img src={greentick} alt="Logo" className="object-contain w-5 h-5" />
      </div> )}
          <p className={attaching==3?'text-gray-300 text-xl ml-8':'text-gray-500 text-xl ml-4'}>Attaching Company Rules</p>
         </div>
         {/* serving */}
         <div className="flex mb-8 items-center ml-4">
          {(serving===1 && <div className="w-5 h-5 rounded-full animate-spin">
        <img src={spinner} alt="Logo" />
      </div>) || (serving===2 &&<div className="">
        <img src={greentick} alt="Logo" className="object-contain w-5 h-5" />
      </div> )}
          <p className={serving==3?'text-gray-300 text-xl ml-8':'text-gray-500 text-xl ml-4'}>Serving best Results</p>
         </div>
        </div>
         
        </div>
      </div>
    </div>
      {/* <div className="">
        <img src={gif} alt="animated"
        className="w-44 h-44 rounded-lg animate-bounce"
        />
      </div>
      <div className="flex justify-center items-center h-screen">
      <div className="w-4 h-4 rounded-full animate-spin">
        <img src={spinner} alt="Logo" />
      </div>
      <div className="w-16 h-16 ">
        <img src={greentick} alt="Logo" className="object-contain w-5 h-5" />
      </div>
    </div> */}
    </div>
  )
}

export default Loading
