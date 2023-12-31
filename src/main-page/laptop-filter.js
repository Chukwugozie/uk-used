import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import LaptopsContext from "../context/laptopsContext";

const LaptopFilter = () => {
  const navigate = useNavigate();
  const allLaptops = useContext(LaptopsContext);

  const brands = allLaptops
    ? Array.from(new Set(allLaptops.map((l) => l.brand)))
    : [];
  brands.unshift(null);

  const onSearchChange = (e) => {
    const brand = e.target.value;
    navigate(`/searchresults/${brand}`);
  };

  return (
    <div className="row mt-3">
      <div className="offset-md-2 col-md-4">
        Look for your dream laptop here:
      </div>
      <div className="col-md-4 mb-3">
        <select className="form-select" onChange={onSearchChange}>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LaptopFilter;
