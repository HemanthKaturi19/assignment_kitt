import React,{useState} from 'react'
import DropDown from './DropDown'
import { BiTargetLock } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { CiCalendar } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Link } from 'react-router-dom';

const SearchPage = () => {
   const [showDownArrow1,setShowDownArraw1]=useState(true);
   const [showDownArrow2,setShowDownArraw2]=useState(true);
   const handleChange1=(event)=>{
    setShowDownArraw1(change => !change);
   };
   const handleChange2=()=>{
    setShowDownArraw2(change => !change);
   }
  return (
    <div className=" flex justify-center items-center h-full mt-24">
        <div className="h-96">
          {/* greet section */}
        <h1 className="text-4xl font-neue text-black font-normal text-center">Good afternoon,Brian</h1>
        {/* search box */}
        <div className="border-2 border-zick-320 mt-12 p-8 text-gray-700 h-64">
            <div>
                <h3 className="text-black font-semibold bg-slate-100 w-fit px-4 py-1 rounded-sm">Flights</h3>
            </div>
            {/* search input section */}
            <div className=" flex mt-4 items-center text-gray-800">
              {/* where from */}
             <div className="  w-54 h-12 flex  items-center border-2 border-zinc-320 rounded-lg py-2 px-2">
              <div><BiTargetLock  className="text-xl  text-slate-600 font-thin "/>
              </div>
            <input className=" ml-2  text-normal outline-none" 
            placeholder='Where from?' type="text"
            />
            <div>            
              {showDownArrow1?<button onClick={handleChange1}><MdKeyboardArrowDown className=" text-slate-800"/></button>
              :<button onClick={handleChange1}><MdKeyboardArrowUp className=" text-slate-800"/></button>}
            </div>
              </div>
              {/* dest logo */}
              <div className="flex justify-center items-center w-10 h-10 p-2 rounded-full bg-slate-100 ml-2">
                <HiArrowsRightLeft className="text-xl "/>
              </div>
              {/* where to sec */}
              <div className=" ml-2 w-54 h-12 flex  items-center border-2 border-zinc-320 rounded-lg py-2 px-2">
              <div><BiTargetLock  className="text-xl  text-slate-600 font-thin "/>
              </div>
            <input className=" ml-2  text-normal outline-none" placeholder='Where to?' type="text"/>
            <div>
            {showDownArrow2?<button onClick={handleChange2}><MdKeyboardArrowDown className=" text-slate-800"/>
            </button>:<button onClick={handleChange2}><MdKeyboardArrowUp className=" text-slate-800"/></button>}
            </div>
              </div>
              {/* departure entry sec */}
              <div className="w-54 h-12 flex  items-center border-2 border-zinc-320 rounded-lg py-2 px-2 ml-2 mr-4">
                <div><CiCalendar  className="text-xl  text-slate-600 font-thin "/>
                </div>
              <input className=" ml-2 w-fit text-normal outline-none" placeholder='Departure' type="text"/>
              </div>
              {/* return entry sec */}
              <div className="w-54 h-12 flex  items-center border-2 border-zinc-320 rounded-lg py-2 px-2 ml-2">
                <div><CiCalendar  className="text-xl  text-slate-600 font-thin "/>
                </div>
              <input className=" ml-2 w-fit text-normal outline-none" placeholder='Return' type="text"/>
              </div>
            </div>
            {/* search button */}
            <Link to="/Loading"className="w-full flex justify-end mt-6 ">
                <div className="bg-customGreen w-52 h-10 flex items-center justify-center rounded-md font-semibold">
                <CiSearch  className="text-lg font-bold text-slate-100 "/>
                <button className="text-slate-100 text-md ml-2 font-neue">search flights</button>
                </div>
            </Link>
            <div className="flex w-64 ">
            <div className="mr-24 pl-none">
            {!showDownArrow1 && <DropDown />}
            </div>
            <div className="ml-52">
            {!showDownArrow2 && <DropDown/>}
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default SearchPage
