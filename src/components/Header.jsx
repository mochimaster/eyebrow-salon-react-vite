import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Services", "services"], ["About", "about"], ["Manicure", "manicure"],
    ["Pedicure", "pedicure"], ["Testimonials", "reviews"], ["Contacts", "contact"]
  ];

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="logo" href="#top">Nail care</a>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">☰</button>
        <nav className={`nav ${open ? "open" : ""}`}>
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
