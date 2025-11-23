import { useEffect, useState } from "react";

const places = [
  { name: "Goa", img: "/image/goa.png" },
  { name: "Tirupati", img: "/image/tirupati.jpeg" },
  { name: "Ujjain", img: "/image/ujjain.jpeg" },
  { name: "Konkan", img: "/image/konkan.png" },
  { name: "Mahabaleshwar", img: "/image/mahabaleshwar.png" },
  { name: "Asthavinayak", img: "/image/asthavinayak.png" },
  { name: "Shaktipeeth", img: "/image/shaktipeeth.png" }
];

function TopPlaces() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % places.length);
    }, 2500);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="topplaces">
      <h2 className="section-title">Our Top Places</h2>

      <div className="top-slider">
        <img src={places[index].img} className="top-img" />
        <h3 className="top-title">{places[index].name}</h3>
      </div>
    </section>
  );
}

export default TopPlaces;