import Laptop from "../laptop";


const FeaturedLaptop = ({ laptop }) => {
  if (laptop)
    return (
      <div>
        <div className="row featuredLaptop">
          <h3 className="col-md-12 text-center">Featured laptop</h3>
        </div>
        <Laptop laptop={laptop} />
      </div>
    );
  return <div>No featured laptop at this time</div>;
};

export default FeaturedLaptop;
