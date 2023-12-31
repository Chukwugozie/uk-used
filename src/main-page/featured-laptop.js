import { useContext, useMemo } from "react";
import Laptop from "../laptop";
import LaptopsContext from "../context/laptopsContext";


const FeaturedLaptop = () => {
  const allLaptops = useContext(LaptopsContext);

  const featuredLaptop = useMemo(() => {
   
    if (allLaptops.length) {
      const randomIndex = Math.floor(Math.random() * allLaptops.length);
      return allLaptops[randomIndex];
    }
  }, [allLaptops]);

  if (featuredLaptop)
    return (
      <div>
        <div className="row featuredLaptop">
          <h3 className="col-md-12 text-center">Featured laptop</h3>
        </div>
        <Laptop laptop={featuredLaptop} />
      </div>
    );
  return <div>No featured laptop at this time</div>;
};

export default FeaturedLaptop;
