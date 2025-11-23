import { useState, useEffect } from "react";

const reviews = [
  {
    name: "Priya S.",
    text: "Our experience with Jay Ganesh Tours and Travels was exceptional. The vehicle was extremely clean and comfortable, and the driver was punctual, polite, and knowledgeable about the routes. We felt completely safe throughout the journey. Their service quality is far better than what we expected at this price range. Highly recommended for stress-free travel."
  },
  {
    name: "Rahul Patil",
    text: "We booked an outstation trip for our family, and Jay Ganesh Tours and Travels handled everything perfectly. From timely pickup to smooth driving, everything was well-organized. The rates were reasonable, and the overall experience felt premium. Their commitment to customer satisfaction is truly impressive. We will definitely choose them again for our next vacation."
  },
  {
    name: "Vikas Kulkarni",
    text: "Jay Ganesh Tours and Travels arranged our entire tour package, and the service was outstanding. They took care of hotel bookings, routes, sightseeing, and everything in between. The driver was patient and friendly, making our entire trip comfortable. We didn’t face a single issue. A genuinely professional and trustworthy travel partner."
  },
  {
    name: "Sneha Jadhav",
    text: "We recently booked a customized tour package through Jay Ganesh Tours and Travels, and the experience was fantastic from start to finish. They understood our requirements, suggested good itineraries, and offered great value for money. The travel arrangements were smooth, and the journey was memorable. Their professionalism and hospitality really stood out."
  },
  {
    name: "Amit Bhagat",
    text: "I regularly use their daily travel service, and it has always been punctual and reliable. The vehicles are well-maintained, and the drivers are disciplined and courteous. What I appreciate most is their consistency and commitment to providing a safe, comfortable journey every single time. Truly one of the best travel services in the area."
  }
];

function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setI((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(slider);
  }, []);

  return (
    <section className="testimonials">
      <h2 className="section-title">What Our Customers Say</h2>

      <div className="review-box">
        <p>"{reviews[i].text}"</p>
        <h3>- {reviews[i].name}</h3>
      </div>
    </section>
  );
}

export default Testimonials;