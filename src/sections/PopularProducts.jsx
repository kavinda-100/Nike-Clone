import { Link } from "react-router-dom"
import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants"

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
    <div className="flex flex-col justify-center items-center gap-5">
    <h2 className="text-4xl font-palanquin font-bold">
    Our <span className="text-coral-red">Popular</span> Products</h2>
    <p className="flex lg:justify-start lg:items-start lg:max-w-lg font-montserrat text-slate-gray">Experience top-notch quality and style with our sought-after selections. Discover a word of comfort, design and value</p>
    </div>

    <div className="flex justify-center items-center">
      <div className="mt-16 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14" >
        {
          products.map((product)=>(
            <PopularProductCard key={product.name} {...product}
            />
          ))
        }
      </div>
    </div>

    </section>
  )
}

export default PopularProducts