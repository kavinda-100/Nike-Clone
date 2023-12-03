import { shoe8 } from "../assets/images"
import Button from "../components/Button"


const SuperQuality = () => {
  return (
    <section id="about-us" 
    className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">

      <div className="flex flex-1 flex-col">

        <div className="flex flex-col justify-start w-full max-xl:padding-x pt-25">

          <div>
            <h2 className="mt-20 font-palanquin text-4xl capitalize font-bold ">
              We Provide You
              <span className="text-coral-red"> Super </span>
              <span className="text-coral-red"> Quality </span> Shoes
            </h2>

            <p className="mt-4 info-text">
            Ensnaring premium comfort and styles, our meticulously crafted footwear is designed to elevate your experience, providing you with the unmatched quality innovation, and touch of elegance.
            </p>
            <p className="mt-6 info-text">
              Our dedication to detail and excellence ensures your satisfaction
            </p>
          </div>

          <div className="mt-11">
            <Button label="View Details"/>
          </div>
          </div>
    </div>

    <div className="flex-1 flex justify-center items-center">
    <img  src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
    />
    </div>

    </section>
  )
}

export default SuperQuality
