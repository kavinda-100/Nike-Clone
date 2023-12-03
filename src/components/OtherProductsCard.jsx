// import { Link } from "react-router-dom";

const OtherProductsCard = ({ product }) => {
  return (
    <div className="h-auto min-w-[100px] min-h-[100px] flex flex-col p-5 hover:shadow-md hover:cursor-pointer hover:bg-gray-100 rounded-xl m-6">
      <img src={product.imgURL} alt={product.name} />
      <h2 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {product.name}
      </h2>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-xl leading-normal">
        {product.price}
      </p>
      <p className="text-xl leading-normal text-slate-gray font-montserrat">
        ({product.rating})
      </p>
      <p className="mt-2 font-semibold font-montserrat text-sm leading-normal">
        {product.imogi}
      </p>
      {/* <Link
        to={product.id}
        className="mt-2 font-semibold font-montserrat text-coral-red text-sm leading-normal hover:underline"
      >
        View Details
      </Link> */}
    </div>
  );
};

export default OtherProductsCard;
