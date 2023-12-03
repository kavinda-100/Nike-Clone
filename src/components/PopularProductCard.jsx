
import { Link,} from "react-router-dom";
import { star } from "../assets/icons";

const PopularProductCard = ({ id, imgURL, name, price ,rating, imogi}) => {
  
  return (
    <div className="group relative w-full max-sm:w-full">
    <div className="flex flex-1 flex-col w-full max-sm:w-full rounded-[20px] gap-9 p-10 group-hover:shadow-md cursor-pointer bg-gray-50">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]"/>
      <div className="mt-8 flex flex-col justify-start gap-2.5">

        <div className="flex flex-row gap-3 md:gap-2">
          <img src={star} atr="ratings" width={24} height={24} 
          />
          <p className="text-xl leading-normal text-slate-gray font-montserrat">
            ({rating})
          </p>
        </div>

        <div className="flex flex-col">
          <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
            {name}
          </h3>
          <p className="mt-2 font-semibold font-montserrat text-coral-red text-xl leading-normal">
            {price}
          </p>
          <p className="mt-2 font-semibold font-montserrat text-xl leading-normal md:text-xm">
            {imogi}
          </p>

          <div className="absolute bottom-1 left-10 group-hover:bottom-0 group-hover:left-3 group-hover:p-4 group-hover:m-5 group-hover:bg-coral-red group-hover:rounded-lg group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out">
          <Link to={`details/${id}`}
          className="text-coral-red font-semibold text-sm group-hover:font-semibold group-hover:font-montserrat group-hover:text-white group-hover:text-sm group-hover:leading-normal group-hover:underline" 
          >View Details</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PopularProductCard;
