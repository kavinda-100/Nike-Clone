import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"


function CustomerReviews() {
  return (
    <section className="max-container">
    
    <div className="flex justify-center items-center flex-col">
      <h3 className="text-4xl text-center font-palanquin font-bold">
        What Our
        <span className="text-coral-red"> Customers </span>
        Say?
      </h3>

      <p className="m-auto mt-6 max-w-lg info-text text-center"> 
      Hear genuine stories from our satisfied Customers about there exceptional experiences with us</p>
    </div>

    <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
    {
      reviews.map((review) => (<ReviewCard 
      key={review.customerName}
      imgUrl={review.imgURL}
      customerName={review.customerName}
      rating={review.rating}
      feedBack={review.feedback}
        
      />))
    }
    </div>

    </section>
  )
}

export default CustomerReviews