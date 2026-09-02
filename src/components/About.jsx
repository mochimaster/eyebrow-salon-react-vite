export default function About() {
  const features = [
    ["✦", "Sterile Tools", "We have one-use files and dry-heat sterilizers."],
    ["✧", "Expert Staff", "Our nail masters work fast and safely."],
    ["◌", "100+ Colors", "You can choose any nail polish you like."],
    ["◇", "Famous Brands", "Our partners are Luxio, OPI, Essie, etc."],
  ];

  return <>
    <section className="section about" id="about">
      <div className="container split">
        <div className="image-card about-image" />
        <div className="about-copy">
          <p className="eyebrow">About us</p>
          <h2>Welcome to Lotus!</h2>
          <p>Lotus is a perfect place to get high-quality nail care and spa services in a clean and welcoming atmosphere.</p>
          <p>Our licensed nail artists are always aware of the latest trends and truly care about their clients.</p>
          <div className="callout"><span>Call us now!</span><strong>+1 (234) 567 89 00</strong></div>
          <a className="text-link" href="#contact">More about us →</a>
        </div>
      </div>
    </section>
    <section className="features">
      <div className="container feature-grid">
        {features.map(([icon, title, text]) => <article key={title}><div className="feature-icon">{icon}</div><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </section>
  </>;
}
