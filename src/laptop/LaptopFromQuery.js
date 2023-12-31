import { useParams } from "react-router-dom";
import Laptop from ".";
import { useContext } from "react";
import LaptopsContext from "../context/laptopsContext";

const LaptopFromQuery = () => {
  const allLaptops = useContext(LaptopsContext);
  const { id } = useParams();
  const laptop = allLaptops.find((l) => l.id === parseInt(id));

  if (!laptop) return <div>Laptop not found.</div>;
  return <Laptop laptop={laptop}></Laptop>;
};

export default LaptopFromQuery;
