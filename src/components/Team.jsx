import { team } from "../data/salonData";

export default function Team() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Team" title="Nails masters" text="Our fairies of manicure and pedicure will take care of you." />
        <div className="team-grid">
          {team.map(person => <article className="person" key={person.name}>
            <img src={person.image} alt={person.name} />
            <h3>{person.name}</h3><p>{person.role}</p>
          </article>)}
        </div>
      </div>
    </section>
  );
}
function SectionHeading({ eyebrow, title, text }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{text}</p></div>;
}
