import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"

const Services = () => {
  return (
    <section className="max-container flex justify-center items-center">
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-9">
    {
       services.map((service) => (<ServiceCard key={service.label} {...service}/>))
    }
    </div>
    
    </section>
  )
}

export default Services