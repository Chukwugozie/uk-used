import { useMemo } from "react";

const useFeaturedLaptop = (allLaptops) => {
  const featuredLaptop = useMemo(() => {
    if (allLaptops.length) {
      const randomIndex = Math.floor(Math.random() * allLaptops.length);
      return allLaptops[randomIndex];
    }
  }, [allLaptops]);

  return featuredLaptop;
};

export default useFeaturedLaptop;
