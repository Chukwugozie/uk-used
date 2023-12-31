import { useState, useEffect } from "react";

const useLaptops = () => {
  const [allLaptops, setAllLaptops] = useState([]);

  useEffect(() => {
    const fetchLaptops = async () => {
      const rsp = await fetch("/laptops.json");
      const laptops = await rsp.json();
      setAllLaptops(laptops);
    };
    fetchLaptops();
  }, []);

  return allLaptops;
};

export default useLaptops;
