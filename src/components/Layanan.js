// rfce
import React from 'react'
import "../css/dist/tailwind.css";

function Layanan({jenisLayanan, cardImage, styleComponent}) {
  return (
    <div>
      <a href="https://google.com"
      className="group hover:transform hover:scale-75">
        <img src={`img/${cardImage}`} alt="" className="sm:justify-items-center" />
        <p className={styleComponent}> {jenisLayanan} </p>
      </a>
    </div>
  )
}

export default Layanan
