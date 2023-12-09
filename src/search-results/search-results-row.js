import { useNavigate } from "react-router-dom";
import "./search-results.css";

const SearchResultsRow = ({ laptop }) => {
  const navigate = useNavigate();

  const setActive = () => {
   navigate(`/laptop/${laptop.id}`);
  };

  return (
    <tr onClick={setActive}>
      <td>{laptop.description}</td>
      <td>{laptop.price}</td>
      <td>{laptop.likes}</td>
    </tr>
  );
};

export default SearchResultsRow;
