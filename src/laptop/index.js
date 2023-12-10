import "./laptop.css";
import { useState } from "react";
import emailIcon from "./Email.png";
import Inquiry from "./Inquiry";

const Laptop = ({ laptop }) => {
  const [inquiryShown,setInquiryShown] = useState(false);
  const inquiryClick=()=>{
    setInquiryShown(!inquiryShown);
  };
  
  return (
    <div>
      <div className="row mt-2">
        <h5 className="col-md-12">{laptop.brand}</h5>
      </div>
      <div className="row">
        <div className="col-md-7">
          <img src={`/images/${laptop.lappy}.png`} alt="Laptop" />
        </div>
        <div className="col-md-5">
          <p className="price" > <text style={{ textDecoration: 'double line-through' }}>N</text> {laptop.price}</p>
          <p>{laptop.description}</p>
          <img
            src={emailIcon}
            height="50"
            alt="inquiry"
            onClick={inquiryClick}
          />
          {inquiryShown && <Inquiry laptop={laptop} />}
        </div>
      </div>
    </div>
  );
};

export default Laptop;
