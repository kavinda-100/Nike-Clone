import { star } from "../assets/icons"


const ReviewCard = ({imgUrl, customerName, rating, feedBack}) => {
  return (
    <div className="flex justify-center items-center flex-col hover:shadow-md p-11 rounded-[20px] cursor-pointer">
    <img 
    src={imgUrl}
    alt={`${customerName} IMAGE`}  
    className="object-contain rounded-full w-[120px] h-[120px]"
    />
    <p className="mt-6 max-w-sm text-center info-text leading-normal">{feedBack}</p>

    <div className="mt-3 flex flex-col justify-center items-center gap-5">
        <div className="flex flex-row gap-5">
            <img 
                src={star}
                alt="star"
                width={24}
                height={24}
                className="object-contain m-0"
            />
            <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
        </div>
        <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
    </div>

    </div>
  )
}

export default ReviewCard