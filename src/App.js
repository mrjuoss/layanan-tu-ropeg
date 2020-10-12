import React from "react";
import "./css/dist/tailwind.css";

import Navigation from "./components/Navigation";
import Banner from "./components/Banner";
import Layanan from "./components/Layanan";
import Footer from "./components/Footer";

function App() {
 return (
  <div>
    <Navigation logoImage="logo.png"/>
    <Banner />
    <div className = "flex flex-col md:mx-auto md:container md:flex-row md:flex-wrap md:justify-between mt-10">
      <Layanan jenisLayanan="REALISASI" cardImage="card-1.png" />
      <Layanan jenisLayanan="SURAT MASUK" cardImage="card-2.png" />
      <Layanan jenisLayanan="RAPAT" cardImage="card-3.png" />
      <Layanan jenisLayanan="LAPORAN" cardImage="card-4.png" />
      <Layanan jenisLayanan="PENGADUAN" cardImage="card-5.png" />
    </div>
    <Footer />


  </div>
 )
}

export default App;