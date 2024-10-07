import React,{useState} from 'react';
import { BiTargetLock } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { CiCalendar } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowUp } from "react-icons/md";

const ModifyFlightsTopup = () => {
    const [showDownArrow1,setShowDownArraw1]=useState(true);
   const [showDownArrow2,setShowDownArraw2]=useState(true);
   const handleChange1=(event)=>{
    setShowDownArraw1(change => !change);
   };
   const handleChange2=()=>{
    setShowDownArraw2(change => !change);
   }
   const wherefrom="DXB dubai Internatio...";
   const whereto="CDG parles charles D...";
  return (
    <button>
    <div className="fixed inset-0 bg-gray-400 opacity-10 z-40"></div>
    <div className="fixed top-0 w-screen h-64 flex bg-white justify-center items-center z-50 ">
             <div>
            <div className=" flex  items-center text-gray-800">
              {/* where from */}
             <div className="  w-54 h-16 flex  items-center border-2 border-zinc-320 rounded-lg py-2 px-2">
              <div><BiTargetLock  className="text-xl  text-slate-600 font-thin "/>
              </div>
              <div className="text-left mx-4">
                <p className="text-md text-gray-500">where from?</p>
                <div className="flex items-center">
                  <p className="text-black text-lg font-medium">DXD</p>
                  <p className="text-gray-500 ml-2">Dubai International</p>
                </div>
              </div>
            <div>            
              {showDownArrow1?<button onClick={handleChange1}><MdKeyboardArrowDown className=" text-slate-800"/></button>
              :<button onClick={handleChange1}><MdKeyboardArrowUp className=" text-slate-800"/></button>}
            </div>
              </div>
              {/* dest logo */}
              <div className="flex justify-center items-center w-16  h-16 p-2 rounded-full bg-slate-100 ml-2">
                <HiArrowsRightLeft className="text-xl "/>
              </div>
              {/* where to sec */}
              <div className=" ml-2 w-64 h-16 flex  items-center border-2 border-zinc-320 rounded-lg py-2 px-2">
              <div><BiTargetLock  className="text-xl  text-slate-600 font-thin "/>
              </div>
              <div className="text-left mx-4">
                <p className="text-md text-gray-500">where to?</p>
                <div className="flex items-center">
                  <p className="text-black text-lg font-medium">CDG</p>
                  <p className="text-gray-500 ml-2">Parles charles d...</p>
                </div>
              </div>
            <div>
            {showDownArrow2?<button onClick={handleChange2}><MdKeyboardArrowDown className=" text-slate-800"/>
            </button>:<button onClick={handleChange2}><MdKeyboardArrowUp className=" text-slate-800"/></button>}
            </div>
              </div>
              {/* departure entry sec */}
              <div className="w-56 h-16 flex  items-center border-2 border-zinc-320 rounded-lg py-2 px-2 ml-2 mr-4">
                <div><CiCalendar  className="text-xl  text-slate-600 font-thin "/>
                </div>
                <div className="text-left ml-4">
                  <p className="text-gray-500 text-sm">Departue</p>
                  <p className="text-black font-medium text-lg">13/12/2024</p>
                </div>             
                 </div>
              {/* return entry sec */}
              <div className="w-56 h-16 flex  items-center border-2 border-zinc-320 rounded-lg py-2 px-2 ml-2">
                <div><CiCalendar  className="text-xl  text-slate-600 font-thin "/>
                </div>
                <div className="text-left ml-4">
                  <p className="text-gray-500 text-sm">Return</p>
                  <p className="text-black font-medium text-lg">13/12/2024</p>
                </div>
              </div>
            </div>
            {/* search button */}
            <div className="w-full flex justify-end mt-6 ">
                <div className="bg-customGreen w-64 h-12 flex items-center justify-center rounded-md font-semibold">
                <CiSearch  className="text-lg font-bold text-slate-100 "/>
                <button className="text-slate-100 text-md ml-2 font-neue">search flights</button>
                </div>
            </div>
            </div>
        </div>
    </button>
    
  )
}

export default ModifyFlightsTopup
