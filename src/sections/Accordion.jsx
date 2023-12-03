import AccordionCard from "../components/AccordionCard"

import { accordionCardDetails } from "../constants"


const Accordion = () => {
  return (
    <div className="flex justify-center items-center flex-col">
    <h1 className="font-montserrat leading-normal text-2xl text-coral-red">Frequently Ask Questions</h1>
    <div className="md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl w-full px-4 py-6 rounded-md shadow-sm">

    {
        accordionCardDetails.map(({question, answer})=>(
            <AccordionCard key={question} question={question} answer={answer}/>
        ))
    }
    </div>
    </div>
  )
}

export default Accordion