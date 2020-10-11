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
    <div className = "container mx-auto flex sm:flex-col md:flex-row justify-between mt-10">
      <Layanan jenisLayanan="REALISASI" cardImage="card-1.png" styleComponent={"sm:mb-4 bg-blue-400 text-center text-white py-2 shadow-lg"} />
      <Layanan jenisLayanan="SURAT MASUK" cardImage="card-2.png" styleComponent={"sm:mb-4 bg-blue-500 text-center text-white py-2 shadow-lg"} />
      <Layanan jenisLayanan="RAPAT" cardImage="card-3.png" styleComponent={"sm:mb-4 bg-purple-700 text-center text-white py-2 shadow-lg"} />
      <Layanan jenisLayanan="LAPORAN" cardImage="card-4.png" styleComponent={"sm:mb-4 bg-purple-800 text-center text-white py-2 shadow-lg"} />
      <Layanan jenisLayanan="PENGADUAN" cardImage="card-5.png" styleComponent={"sm:mb-4 bg-purple-900 text-center text-white py-2 shadow-lg"} />
    </div>
    <Footer />


  </div>
 )
}

export default App;