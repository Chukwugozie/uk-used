import { useContext } from "react";
import SearchResultsRow from "./search-results-row";
import { useParams } from "react-router-dom";
import { LaptopContext } from "../context/laptopContext";

const SearchResults = () => {

  const {allLaptops} = useContext(LaptopContext);
  const { brand } = useParams();
  const filteredLaptops = allLaptops.filter((l) => l.brand === brand);

  return (
    <div className="mt-2">
      <h4>Results for {brand}:</h4>
      <table className="table table-hover">
        <tbody>
          {filteredLaptops.map((l) => (
            <SearchResultsRow key={l.id} laptop={l} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
