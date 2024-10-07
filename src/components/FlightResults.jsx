import React, { useState, useEffect } from 'react';
import FlightDetails from './FlightDetails';
import ModifyFlightsTopup from './ModifyFlightsTopup';
import Navbar from './Navbar';
import Airplane from './Airplane';
const FlightResults = () => {
  const [showRightPopup, setShowRightPopup] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const handleButtonClick = () => {
    setShowRightPopup(true);
  };

  const closeRightPopup = () => {
    setShowRightPopup(false);
  };

  
  return (
    <div>
      <div onClick={()=>setPopupVisible(true)} className="top-0 border-b-2 border-gray-200 py-2">
      <Navbar />
      </div>
      <div className="mt-12">
      <h1 className="text-gray-400 text-xl ml-28 mb-4">Showing 365 of 967 Results</h1>
      <button 
        onClick={handleButtonClick} 
        className="px-4 py-2  text-white rounded w-svw h-auto ml-24"
      >
        <Airplane />
      </button>
      <div className="px-4 py-2  text-white rounded w-svw h-auto ml-24">
      <Airplane />
      </div>
      </div>
      {/* topups */}
      {isPopupVisible && (
        <div onClick={()=>setPopupVisible(false)}>
          <ModifyFlightsTopup />
        </div>
      )}
      {showRightPopup && 
      <FlightDetails onClose={closeRightPopup} />}
    </div>
  );
};

export default FlightResults;
