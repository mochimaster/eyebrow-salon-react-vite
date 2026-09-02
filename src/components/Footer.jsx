export default function Footer() {
  return <footer>
    <div className="container footer-grid">
      <div><a className="logo" href="#top">Nail care</a><p>Nail care you deserve.</p></div>
      <div className="footer-links">{["Services","About","Manicure","Pedicure","Testimonials","Contacts"].map(x => <a key={x} href={`#${x.toLowerCase() === "testimonials" ? "reviews" : x.toLowerCase()}`}>{x}</a>)}</div>
    </div>
    <div className="container copyright">© 2026 Lotus Nail Care · React practice project</div>
  </footer>;
}
