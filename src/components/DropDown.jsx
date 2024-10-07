import React, { useState } from 'react';
import data from '../data/data.json'; // Adjust the path as needed

const DropDown = (s) => {
    const limitArray=data.slice(0,4);
  return (
    <div className="border-2 border-zinc-320 w-64 rounded-md pl-2 pr-4 py-4 bg-white">
        <ul>
        {limitArray.map((airport,index) => (
          <li key={index}>
          <button>
          <div className="flex justify-between items-center w-56 h-16">
        <div>
            <p className="text-lg font-normal text-zinc-800">{airport.city}</p>
            <p className="text-md font-light text-black">{airport.country}</p>
        </div>
        <div className="ml-8">
            <h3 className="text-lg font-normal text-zinc-800">{airport.code}</h3>
        </div>
      </div>
          </button>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default DropDown;