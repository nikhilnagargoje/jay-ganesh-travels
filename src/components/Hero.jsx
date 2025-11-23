import { useNavigate } from "react-router-dom";

function Hero() {

  const handleBookNow = () => {
    window.location.href = "tel:+91";  // ← Direct Call
  };

  return (
    <section id="hero" className="hero">
      <div>
        <h1>Explore The World With Us</h1>
        <p>Premium Packages • Affordable Rates • Best Service</p>

        <button className="btn-main" onClick={handleBookNow}>
          Book Now
        </button>
      </div>
    </section>
  );
}

export default Hero;