import { useParams } from "react-router-dom";

const data = {
  1: {
    name: "4 Seater Car",
    type: "Car",
    acRate: "₹13 per km",
    nonAcRate: "₹12 per km",
    desc: "Perfect for small family trips, airport pickups, and local travel.",
    img: "/image/4.jpg"
  },
  2: {
    name: "7 Seater Car",
    type: "SUV",
    acRate: "₹16 per km",
    nonAcRate: "₹15 per km",
    desc: "Ideal for medium family tours with comfort and premium space.",
    img: "/image/ertiga.jpg"
  },
  3: {
    name: "17 Seater Mini Bus",
    type: "Mini Bus",
    acRate: "₹26 per km",
    nonAcRate: "₹22 per km",
    desc: "Best for school picnics, tourist groups, and office outings.",
    img: "/image/17.jpg"
  },
  4: {
    name: "20 Seater Mini Bus",
    type: "Mini Bus",
    acRate: "₹28 per km",
    nonAcRate: "₹24 per km",
    desc: "Spacious and comfortable bus for group tours and events.",
    img: "/image/20.jpg"
  },
  5: {
    name: "24 Seater Bus",
    type: "Bus",
    acRate: "—",
    nonAcRate: "₹28 per km",
    desc: "Premium bus for medium-sized travel groups, safe & reliable.",
    img: "/image/24.jpg"
  },
  6: {
    name: "32 Seater Bus",
    type: "Bus",
    acRate: "₹52 per km",
    nonAcRate: "₹35 per km",
    desc: "Comfortable for long trips with luxury seating & air-conditioning.",
    img: "/image/32.jpg"
  },
  7: {
    name: "36 Seater Bus",
    type: "Bus",
    acRate: "₹55 per km",
    nonAcRate: "₹40 per km",
    desc: "Ideal for large family tours, corporate events, & picnic groups.",
    img: "/image/36.jpg"
  },
  8: {
    name: "45 Seater Bus",
    type: "Bus",
    acRate: "₹60 per km",
    nonAcRate: "₹50 per km",
    desc: "Best for large group tours, school trips & tourism packages.",
    img: "/image/42.jpg"
  }
};

function VehicleDetails() {
  const { id } = useParams();
  const vehicle = data[id];

  return (
    <div className="vehicle-details">
      <img src={vehicle.img} className="details-img" alt={vehicle.name} />

      <h1>{vehicle.name}</h1>

      <h3>
        Type: <span style={{ color: "#ffdd00" }}>{vehicle.type}</span>
      </h3>

      <h3>
        AC Rate: <span style={{ color: "#ffdd00" }}>{vehicle.acRate}</span>
      </h3>

      <h3>
        Non-AC Rate: <span style={{ color: "#ffdd00" }}>{vehicle.nonAcRate}</span>
      </h3>

      <p>{vehicle.desc}</p>

      {/* DIRECT CALL BUTTON */}
      <a className="btn-main" href="tel:+917721823575">
        📞 Book Now
      </a>
    </div>
  );
}

export default VehicleDetails;