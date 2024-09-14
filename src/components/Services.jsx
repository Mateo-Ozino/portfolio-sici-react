import { ServiceCard } from "./services/ServiceCard"
import { services } from "../data/services"

export function Services() {
  return (
    <section className="services">
      {services.map((service, index) => (
        <ServiceCard key={service.id} service={service} index={index} />
      ))}
    </section>
  )
}