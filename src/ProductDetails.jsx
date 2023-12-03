import { useParams } from "react-router-dom";
import OtherProductsCard from "./components/OtherProductsCard";
import ProductDetailsCard from "./components/ProductDetailsCard";
import { products } from "./constants";

const ProductDetails = () => {
  const { id } = useParams();
  // console.log(id)
  const product = products.find((product) => product.id == id);
  // console.log(product)

  return (
    <section className="w-full min-h-screen relative">
      {/* getting space for the content */}
      <section className=" w-full h-[80px]"></section>

      <h1 className="text-2xl text-center font-montserrat text-coral-red leading-normal font-semibold mt-8 capitalize">product</h1>

      {/* body */}
      <main className="w-full h-auto lg:px-40 xl:px-[200px] 2xl:px-[300px] flex flex-col justify-center items-center">
        {product && <ProductDetailsCard key={product.id} product={product} />}
        {!product && <h3 className="text-sm text-slate-700">No Product</h3>}

      </main>


        {/* other related products */}
        <h1 className="text-3xl text-center font-montserrat text-coral-red leading-normal font-semibold mt-20 capitalize">Other related products</h1>

        <p className="text-center text-sm font-montserrat text-slate-gray">Experience top-notch quality and style with our sought-after selections. Discover a word of comfort, design and value</p>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-1 gap-4 px-16 2xl:px-[200px]">
        {
            products.map(product => {
            return <OtherProductsCard key={product.id} product={product}/>
            })
        }
        </section>
    </section>
  );
};

export default ProductDetails;
