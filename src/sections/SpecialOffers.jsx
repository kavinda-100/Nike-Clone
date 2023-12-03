import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"


const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap justify-center items-center max-xl:flex-col-reverse gap-10 max-container">

    <div className="flex-1">
      <img 
        src={offer}
        alt="offer"
        width={773}
        height={687}
        className="object-contain w-full"
      />
    </div>

    <div className="flex flex-1 flex-col">

        <div className="flex flex-col justify-start w-full max-xl:padding-x pt-25">

          <div>
            <h2 className="mt-20 font-palanquin text-4xl capitalize font-bold ">
              <span className="text-coral-red"> Special </span>
               Offers
            </h2>

            <p className="mt-5 info-text">
            Ensnaring premium comfort and styles, our meticulously crafted footwear is designed to elevate your experience, providing you with the unmatched quality innovation, and touch of elegance.
            </p>
            <p className="mt-6 info-text">
              Our dedication to detail and excellence ensures your satisfaction
            </p>
          </div>

          <div className="mt-11 flex flex-row gap-4">
            <Button label="Shop Now" imgUrl={arrowRight}/>
            <Button label="Learn More"
              backgroundColor = "bg-white"
              borderColor = "border-slate-gray"
              textColor = "text-slate-gray"
            />
          </div>
          </div>
    </div>
    
    </section>
  )
}

export default SpecialOffers