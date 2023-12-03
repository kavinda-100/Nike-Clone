
import { Buy, Cart } from "../assets/icons";
import Button from "./Button";

const ProductDetailsCard = ({ product }) => {
  return (
    <div>
      <section className="flex flex-col sm:flex-row sm:justify-center sm:items-center">
        <div className="m-6 my-4">
          <img
            src={product.imgURL}
            alt={product.name}
            className="w-[400px] h-[400px] sm:w-[350px] sm:h-[350px]"
          />
        </div>
        <div className="m-4 flex flex-col justify-center items-start sm:ml-10 lg:ml-40">
          <h3 className="text-3xl text-coral-red font-montserrat font-semibold">
            {product.name}
          </h3>
          <span className="text-2xl my-5">{product.imogi}</span>
          <h5 className="text-2xl text-slate-500 font-palanquin mt-4">
            {product.price}
          </h5>

          <div className="flex gap-4 my-4 text-sm capitalize font-montserrat">
            <p className="text-slate-600">discount <span className="text-xl text-green-500 font-palanquin font-bold">{product.discount}</span></p>
            <p className="text-slate-600"> sold <span className="text-xl text-coral-red font-palanquin font-bold"> +{product.sold}</span></p>
          </div>

          <p className={`text-xl text-green-400 font-palanquin font-bold capitalize ${product.freeShipping ? null : `line-through`}`}>{product.shipping}</p>

          <h6 className="text-xl text-slate-400 my-4">({product.rating}) <span className="text-sm text-slate-500">All reviews come from verified purchasers</span></h6>

          <div className="flex flex-row gap-3 my-6">
            <Button label="Add to Cart" imgUrl={Cart}/>
            <Button label="Buy Now" imgUrl={Buy}/>
          </div>
        </div>
      </section>

      <section>
      <h1 className="text-3xl text-coral-red font-montserrat font-bold ml-5">Description</h1>
        <div className="m-5">
          <p className="text-sm leading-normal font-montserrat capitalize">
            {product.description}
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailsCard;
