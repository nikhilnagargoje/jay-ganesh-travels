// ...existing code...
import { useState } from "react";
import Toast from "./Toast";

export default function Contact() {
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    fromCity: "",
    toCity: "",
    vehicle: "",
    message: ""
  });
  const [sending, setSending] = useState(false);

  const showToast = (msg, type = "success") => {
    setToast({ show: true, message: msg, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 3500);
  };

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    // basic client-side validation
    if (!form.name.trim() || !form.mobile.trim() || !form.vehicle.trim()) {
      showToast("Please fill required fields: Name, Mobile, Vehicle", "warn");
      return;
    }

    setSending(true);

    try {
      const res = await fetch("https://jay-ganesh-travels-ajotutrlw-nikhi-nagargojes-projects.vercel.app/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (data && data.success) {
        showToast(data.msg || "Message Sent Successfully!", "success");
        setForm({
          name: "",
          mobile: "",
          email: "",
          fromCity: "",
          toCity: "",
          vehicle: "",
          message: ""
        });
      } else {
        // show server-provided error message if available
        const errMsg = (data && (data.msg || data.error)) || "Failed to send message";
        showToast(errMsg, "error");
      }
    } catch (err) {
      showToast("Server Error! Try again", "error");
      console.error("Contact sendMessage error:", err);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact Us</h2>

      {/* Toast notification (uses Toast.css) */}
      <Toast show={toast.show} type={toast.type} message={toast.message} />

      <form onSubmit={sendMessage} aria-label="Contact form">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="mobile"
          placeholder="Mobile"
          value={form.mobile}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          type="email"
        />

        <input
          name="fromCity"
          placeholder="From City"
          value={form.fromCity}
          onChange={handleChange}
        />

        <input
          name="toCity"
          placeholder="To City"
          value={form.toCity}
          onChange={handleChange}
        />

        <select
          name="vehicle"
          onChange={handleChange}
          value={form.vehicle}
          required
        >
          <option value="">Select Vehicle</option>
          <option>4 Seater</option>
          <option>7 Seater</option>
          <option>17 Seater</option>
          <option>20 Seater</option>
          <option>24 Seater</option>
          <option>32 Seater</option>
          <option>36 Seater</option>
          <option>45 Seater</option>
        </select>

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
        ></textarea>

        <button className="btn-main" type="submit" disabled={sending} aria-busy={sending}>
          {sending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
// ...existing code...
