// rfce
import React from 'react';
import "../css/dist/tailwind.css";


function Navigation({logoImage}) {
  return (
    <div className = "container mx-auto flex justify-between items-center">
      <img src={`img/${logoImage}`} alt="" className="h-6 md:h-12" />
      <ul className="hidden md:block md:flex md:flex-row">
         <li className="text-white text-sm">
           <a href="#home" className="nav-menu">Home</a>
         </li>
         <li className="text-white text-sm">
           <a href="#layanan" className="nav-menu">Layanan</a>
         </li>
         <li className="text-white text-sm">
           <a href="#kontak" className="nav-menu">Kontak</a>
         </li>
      </ul>
    </div>
  )
}

export default Navigation
