import { useEffect, useState } from "react";

const stats = [
  { value: 15, label: "Years Experience" },
  { value: 10000, label: "Happy Customers" },
  { value: 1000, label: "Successful Trips" },
  { value: 24, label: "Hours Support" }
];

function WhyUs() {

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const speed = Math.ceil(end / 50);

      const counter = setInterval(() => {
        start += speed;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = start;
          return updated;
        });
      }, 50);
    });
  }, []);

  return (
    <section className="whyus">
      <h2 className="section-title">Why Choose Us</h2>

      <div className="why-grid">
        {stats.map((s, index) => (
          <div className="why-box" key={index}>
            <h1>{counts[index]}+</h1>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyUs;