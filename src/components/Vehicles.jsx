import { Link } from "react-router-dom";

const vehicles = [
  {
    id: 1,
    name: "4 Seater Car",
    type: "Car",
    acRate: "₹13 per km",
    nonAcRate: "₹12 per km",
    img: "/image/4.jpg",
    desc: "Best for small family local & outstation trips."
  },
  {
    id: 2,
    name: "7 Seater SUV",
    type: "SUV",
    acRate: "₹16 per km",
    nonAcRate: "₹15 per km",
    img: "/image/ertiga.jpg",
    desc: "Perfect for premium family tours & long journeys."
  },
  {
    id: 3,
    name: "17 Seater Mini Bus",
    type: "Mini Bus",
    acRate: "₹26 per km",
    nonAcRate: "₹22 per km",
    img: "image/17.jpg",
    desc: "Great for group tours, picnics & corporate trips."
  },
  {
    id: 4,
    name: "20 Seater Mini Bus",
    type: "Mini Bus",
    acRate: "₹28 per km",
    nonAcRate: "₹24 per km",
    img: "image/20.jpg",
    desc: "Comfortable seating for group tours & events."
  },
  {
    id: 5,
    name: "24 Seater Bus",
    type: "Bus",
    acRate: "—",
    nonAcRate: "₹28 per km",
    img: "/image/24.jpg",
    desc: "Best for mid-size tourist groups & school trips."
  },
  {
    id: 6,
    name: "32 Seater Bus",
    type: "Bus",
    acRate: "₹52 per km",
    nonAcRate: "₹35 per km",
    img: "/image/32.jpg",
    desc: "Smooth travel experience for long-distance tours."
  },
  {
    id: 7,
    name: "36 Seater Bus",
    type: "Bus",
    acRate: "₹55 per km",
    nonAcRate: "₹40 per km",
    img: "image/36.jpg",
    desc: "Perfect for large picnics & corporate travel."
  },
  {
    id: 8,
    name: "45 Seater Bus",
    type: "Bus",
    acRate: "₹60 per km",
    nonAcRate: "₹50 per km",
    img: "image/42.jpg",
    desc: "Ideal for school tours, events & tourism packages."
  }
];

function Vehicles() {
  return (
    <section id="vehicles" className="vehicle-section">
      <h2 className="section-title">Our Vehicles</h2>

      <div className="vehicle-grid">
        {vehicles.map((v) => (
          <Link key={v.id} to={`/vehicle/${v.id}`} className="vehicle-card">
            <img src={v.img} alt={v.name} />

            <h3>{v.name}</h3>

            <p>
              <strong>Type:</strong> {v.type}
            </p>

            <p>
              <strong>AC Rate:</strong>{" "}
              <span style={{ color: "#ffdd00" }}>{v.acRate}</span>
            </p>

            <p>
              <strong>Non-AC Rate:</strong>{" "}
              <span style={{ color: "#ffdd00" }}>{v.nonAcRate}</span>
            </p>

            <p>{v.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Vehicles;
