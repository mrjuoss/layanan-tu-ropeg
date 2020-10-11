// rfce
import React from 'react';
import "../css/dist/tailwind.css";


function Navigation({logoImage}) {
  return (
    <div className = "container mx-auto flex justify-between items-center">
      <img src={`img/${logoImage}`} alt="" />
      <ul className="flex flex-row">
         <li className="text-white text-sm">
           <a href="#home" className="bg-purple-900 mr-2 px-8 py-2 rounded hover:bg-purple-200 hover:font-semibold hover:text-purple-900">Home</a>
         </li>
         <li className="text-white text-sm">
           <a href="#layanan" className="bg-purple-900 mx-2 px-8 py-2 rounded hover:bg-purple-200 hover:font-semibold hover:text-purple-900">Layanan</a>
         </li>
         <li className="text-white text-sm">
           <a href="#kontak" className="bg-purple-900 mx-2 px-8 py-2 rounded hover:bg-purple-200 hover:font-semibold hover:text-purple-900">Kontak</a>
         </li>
      </ul>
    </div>
  )
}

export default Navigation
