import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  function submit(e) { e.preventDefault(); setSent(true); e.currentTarget.reset(); }

  return <section className="section contact" id="contact">
    <div className="container split contact-grid">
      <div>
        <p className="eyebrow">Contacts</p><h2>Contact us now</h2>
        <p>Don't forget to book an appointment to get the best service!</p>
        <div className="contact-info">
          <p><span>Address</span>59 Queen Street, New York, NY 10002</p>
          <p><span>Phone</span>+1 (234) 567 89 00</p>
          <p><span>Email</span>lotus@example.com</p>
        </div>
      </div>
      <form className="booking-form" onSubmit={submit}>
        <input placeholder="Your name" required />
        <input type="email" placeholder="Email" required />
        <select required><option value="">Choose service</option><option>Manicure</option><option>Pedicure</option><option>Nail Art</option></select>
        <textarea rows="5" placeholder="Message" />
        <button className="btn btn-dark">Send request</button>
        {sent && <p className="form-message">Thanks! This is a practice form — connect a backend later.</p>}
      </form>
    </div>
  </section>;
}
