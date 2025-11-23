import { FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Footer() {
  const scrollTo = (id) => {
    const sec = document.getElementById(id);
    if (sec) {
      sec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">

      <div className="footer-content">

        {/* CONTACT INFO */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📍 Office: Parking No 2, Solapur - Pune Highway,<br/>Shewalewadi, Hadapsar, Pune, Maharashtra 412307</p>
          <p>📞 Phone: <a href="tel:+917721823575">+917721823575</a></p>
          <p>✉ Email: <a href="mailto:jayganeshtravels0@gmail.com">jayganeshtravels0@gmail.com</a></p>
        </div>

        {/* SOCIAL ICONS */}
        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="icon-row">
            <a href="https://www.instagram.com/JayGanesh.Travels" target="_blank" className="footer-icon">
              <FaInstagram />
            </a>

            <a href="https://wa.me/917721823575" target="_blank" className="footer-icon">
              <FaWhatsapp />
            </a>

            <a href="mailto:jayganeshtravels0@gmail.com" className="footer-icon">
              <FaEnvelope />
            </a>

            <a href="tel:+917721823575" className="footer-icon">
              <FaPhoneAlt />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <p className="footer-link" onClick={() => scrollTo("hero")}>Home</p>
          <p className="footer-link" onClick={() => scrollTo("daily")}>Daily Travels</p>
          <p className="footer-link" onClick={() => scrollTo("qr")}>QR Section</p>
          <p className="footer-link" onClick={() => scrollTo("vehicles")}>Vehicles</p>
          <a className="footer-link" href="/terms">Terms & Conditions</a>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Jay Ganesh Tours & Travels | Developed by <span>Tuljai Solutions</span>
      </div>

    </footer>
  );
}

export default Footer;
