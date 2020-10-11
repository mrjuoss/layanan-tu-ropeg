import React from "react";
import "./css/dist/tailwind.css";

import Navigation from "./components/Navigation";
import Banner from "./components/Banner";
import Layanan from "./components/Layanan";
import Footer from "./components/Footer";

function App() {
 return (
  <div  >
    <Navigation logoImage="logo.png"/>
    <Banner />
    <div className = "container mx-auto flex justify-between mt-10">
      <Layanan jenisLayanan="REALISASI" cardImage="card-1.png" styleComponent={"bg-blue-400 text-center text-white py-2"} />
      <Layanan jenisLayanan="SURAT MASUK" cardImage="card-2.png" styleComponent={"bg-blue-500 text-center text-white py-2"} />
      <Layanan jenisLayanan="RAPAT" cardImage="card-3.png" styleComponent={"bg-purple-700 text-center text-white py-2"} />
      <Layanan jenisLayanan="LAPORAN" cardImage="card-4.png" styleComponent={"bg-purple-800 text-center text-white py-2"} />
      <Layanan jenisLayanan="PENGADUAN" cardImage="card-5.png" styleComponent={"bg-purple-900 text-center text-white py-2"} />
    </div>
    <Footer />


  </div>
 )
}

export default App;