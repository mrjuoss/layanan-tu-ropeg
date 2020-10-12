// rfce
import React from 'react'
import "../css/dist/tailwind.css";

function Layanan({jenisLayanan, cardImage}) {
  return (
    <div className="w-64 pl-4 mx-auto mb-4 mb:mx-20">
      <a href="https://google.com"
      className="group hover:transform hover:scale-75">
        <img src={`img/${cardImage}`} alt="" className="w-56" />
        <p className="w-56 py-2 mb-4 text-center text-white bg-purple-800 shadow-lg"> {jenisLayanan} </p>
      </a>
    </div>
  )
}

export default Layanan
