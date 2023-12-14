import { useEffect, useState } from "react";

export const FetchLaptops = () => {

    const [isLoading, setIsLoading] = useState(true);

    const [allLaptops, setAllLaptops] = useState([]);

  useEffect(() => {
    const fetchLaptop = async () => {
      setIsLoading(false)
      const rsp = await fetch("/laptops.json");
      const laptops = await rsp.json();
      if(laptops){
      setAllLaptops(laptops);
      setIsLoading(true);
      }
    };
    fetchLaptop();
  }, []);

  return {isLoading, allLaptops}
}