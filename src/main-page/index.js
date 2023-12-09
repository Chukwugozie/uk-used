import { useState, useEffect, useMemo } from "react";
import "./main-page.css";
import Header from "./header";
//import { Router } from "react-router-dom";
import FeaturedLaptop from "./featured-laptop";
import LaptopFilter from "./laptop-filter";
import SearchResults from "../search-results";

import {BrowserRouter, Routes, Route,} from "react-router-dom";
//import LaptopFromQuery from "../laptop/LaptopFromQuery";


function App() {
  
    const [allLaptops, setAllLaptops] = useState([]);

  useEffect(() => {
    const fetchLaptop = async () => {
      const rsp = await fetch("/laptops.json");
      const laptops = await rsp.json();
      setAllLaptops(laptops);
    };
    fetchLaptop();
  }, []);

  const featuredLaptop = useMemo(() => {
    if (allLaptops.length) {
      const randomIndex = Math.floor(Math.random() * allLaptops.length);
      return allLaptops[randomIndex];
    }
  }, [allLaptops]);
  return(
   <BrowserRouter>
    <div className="container">
      <Header subtitle="Providing laptops to all at affordable prices" />
      <LaptopFilter allLaptops={allLaptops} />
      <FeaturedLaptop  laptop={featuredLaptop}/>
      
      <Routes>

        
        <Route path="/searchresults/:brand" element={<SearchResults allLaptops= {allLaptops}  />} />
        <Route path="/" element={<FeaturedLaptop  />} />
           
      </Routes> 
    </div>
    
   </BrowserRouter>
  );
}

export default App;
