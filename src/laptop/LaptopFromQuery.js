import { useParams } from "react-router-dom";
import Laptop from ".";

const LaptopFromQuery = ({ allLaptops }) => {
  const { id } = useParams();
  const laptop = allLaptops.find((l) => l.id === parseInt(id));

  if (!laptop) return <div>Laptop not found.</div>;
  return <Laptop laptop={laptop}></Laptop>;
};

export default LaptopFromQuery;
