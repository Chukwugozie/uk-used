
import "./main-page.css";
import Header from "./header";
//import { Router } from "react-router-dom";
import FeaturedLaptop from "./featured-laptop";
import LaptopFilter from "./laptop-filter";
import SearchResults from "../search-results";

import {BrowserRouter, Routes, Route,} from "react-router-dom";
import LaptopFromQuery from "../laptop/LaptopFromQuery";
//import Inquiry from "../laptop/Inquiry";
//import { FetchLaptops } from "../hooks/restcall";
import LaptopContextProvider from "../context/laptopContext";


function App() {
  
  //   const {allLaptops} = FetchLaptops();

  // const featuredLaptop = useMemo(() => {
  //   if (allLaptops.length) {
  //     const randomIndex = Math.floor(Math.random() * allLaptops.length);
  //     return allLaptops[randomIndex];
  //   }
  // }, [allLaptops]);
  return(
   <BrowserRouter>
    <div className="container">
      <Header subtitle="Providing laptops to all at affordable prices" />
      <LaptopContextProvider>
      <LaptopFilter />
      
      
      <Routes>

        
        <Route path="/searchresults/:brand" element={<SearchResults />} />
        <Route  path="/laptop/:id" element={<LaptopFromQuery />} />
        <Route path="/" element={<FeaturedLaptop />} />
           
      </Routes> 
      </LaptopContextProvider>
    </div>
    
   </BrowserRouter>
  );
}

export default App;
