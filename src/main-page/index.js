//import { useState, useEffect, useMemo } from "react";
import "./main-page.css";
import Header from "./header";
//import { Router } from "react-router-dom";
import FeaturedLaptop from "./featured-laptop";
import LaptopFilter from "./laptop-filter";
import SearchResults from "../search-results";

import {BrowserRouter, Routes, Route,} from "react-router-dom";
import LaptopFromQuery from "../laptop/LaptopFromQuery";

import useFeaturedLaptop from "../hooks/useFeaturedLaptop";
import useLaptops from "../hooks/useLaptops";
import LaptopsContext from "../context/laptopsContext";
//import Inquiry from "../laptop/Inquiry";


function App() {  
  const allLaptops = useLaptops();
  const featuredLaptop = useFeaturedLaptop(allLaptops);
  
  return(
   <BrowserRouter>
    <LaptopsContext.Provider value={allLaptops}>
      <div className="container">
        <Header subtitle="Providing laptops to all at affordable prices" />
        <LaptopFilter />
        
        <Routes>
          <Route path="/searchresults/:brand" element={<SearchResults  />} />
          <Route  path="/laptop/:id" element={<LaptopFromQuery  />} />
          <Route path="/" element={<FeaturedLaptop laptop={featuredLaptop} />} />
        </Routes> 
      </div>
    </LaptopsContext.Provider>
   </BrowserRouter>
  );
}

export default App;
