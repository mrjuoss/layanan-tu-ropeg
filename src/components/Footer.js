import React from 'react'
import "../css/dist/tailwind.css";

function Footer() {
  return (
    <div className="h-20 mt-10 flex flex-col text-purple-100 bg-purple-900">
      <p className="mx-auto mt-4 text-sm">Copyright @2020</p>
      <p className="mx-auto text-xs">Powered by ReactJS and Hosted by Vercel</p>
    </div>
  )
}

export default Footer
