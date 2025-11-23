import { useState } from "react";

const faqs = [
  { q: "How to book your travels?", a: "You can call, WhatsApp or use our booking form." },
  { q: "Are vehicles sanitized?", a: "Yes, all our vehicles are sanitized before every trip." },
  { q: "Can I book a customized tour package?", a: "Absolutely. We design customized trips based on your destination, budget, and travel dates." },
  { q: "What services does Jay Ganesh Tours and Travels provide?", a: "We offer daily travel services, outstation trips, and all-India tour packages." },
  { q: "Do you provide airport pickup and drop services?", a: "Yes, we provide 24/7 airport pickup and drop services." },
  { q: "How can I make a booking?", a: "You can book through call, WhatsApp, website enquiry form, or by visiting our office." },
  { q: "Are your drivers experienced?", a: "Yes, all our drivers are trained, professional, and experienced." },
  { q: "Is advance payment required?", a: "Yes, advance payment confirms your booking." }
];

function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="faq">
      <h2 className="section-title">Frequently Asked Questions</h2>

      <div className="faq-box">
        {faqs.map((item, i) => (
          <div key={i} className={open === i ? "faq-item active" : "faq-item"}>

            {/* QUESTION */}
            <div 
  className={open === i ? "faq-question active" : "faq-question"} 
  onClick={() => setOpen(open === i ? null : i)}
>
  {item.q}

  <span 
    className={
      open === i ? "faq-arrow rotate active" : "faq-arrow"
    }
  >
    ▼
  </span>
</div>
            {/* ANSWER */}
            <div className={open === i ? "faq-answer-wrapper open" : "faq-answer-wrapper"}>
              <p className="faq-answer">{item.a}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;