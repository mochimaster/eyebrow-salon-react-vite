import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Team from "./components/Team";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return <>
    <Header />
    <main>
      <Hero />
      <Services />
      <About />
      <Team />
      <section className="promo"><div className="container promo-inner"><div><p className="eyebrow">Special offer</p><h2>50% off</h2><p>On all bookings before 12/25.</p></div><a className="btn btn-dark" href="#contact">Book now</a></div></section>
      <Pricing />
      <Testimonials />
      <section className="section subscribe"><div className="container subscribe-box"><div><p className="eyebrow">Subscribe</p><h2>Get special offers every week</h2></div><form onSubmit={e => { e.preventDefault(); alert("Thanks for subscribing!"); e.currentTarget.reset(); }}><input type="email" placeholder="Email*" required /><button className="btn btn-dark">Subscribe</button></form></div></section>
      <section className="section media"><div className="container"><div className="section-heading"><p className="eyebrow">Media</p><h2>Featured in magazines</h2><p>We are proud to be mentioned by top American magazines.</p></div><div className="magazines"><div>Vogue</div><div>Allure</div><div>Cosmopolitan</div></div></div></section>
      <Contact />
    </main>
    <Footer />
  </>;
}
