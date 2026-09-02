import { services } from "../data/salonData";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionHeading eyebrow="Our services" title="Featured nail services" text="All kinds of procedures for your hands and feet." />
        <div className="service-grid">
          {services.map(service => (
            <article className="service-card" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.name}</h3>
              <p>{service.price}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{text}</p></div>;
}
