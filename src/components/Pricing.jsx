import { manicurePrices, pedicurePrices } from "../data/salonData";

function PriceSection({ id, title, text, items, alt = false }) {
  return <section className={`section pricing ${alt ? "alt" : ""}`} id={id}>
    <div className="container">
      <div className="section-heading"><p className="eyebrow">Pricing</p><h2>{title}</h2><p>{text}</p></div>
      <div className="price-list">
        {items.map(([name, price, description]) => <div key={name}>
          <h3>{name}</h3><strong>{price}</strong><p>{description}</p>
        </div>)}
      </div>
    </div>
  </section>;
}

export default function Pricing() {
  return <>
    <PriceSection id="manicure" title="Pricing for manicure" text="Perfect nails are the result of continuous search for excellence and attention to detail." items={manicurePrices} />
    <PriceSection id="pedicure" title="Pricing for pedicure" text="A pedicure is not only a toenail treatment, but also a pleasant and relaxing procedure." items={pedicurePrices} alt />
  </>;
}
