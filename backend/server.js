const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

// Transporter (GMAIL)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, 
  auth: {
    user: "jayganeshtravels0@gmail.com",
    pass: "aukx xuvt zenk scwi"   // Gmail App Password
  }
});

// Verify transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.log("❌ Email transporter error:", error);
  } else {
    console.log("✅ Email transporter ready!");
  }
});

// API ROUTE
app.post("/send-message", async (req, res) => {
  try {
    const { name, mobile, email, fromCity, toCity, vehicle, message } = req.body;

    // Validate form data
    if (!name || !mobile || !vehicle) {
      return res.json({ success: false, msg: "Please fill all required fields" });
    }

    const mailOptions = {
      from: "jayganeshtravels0@gmail.com",  // ✅ MUST match authenticated email
      to: "jayganeshtravels0@gmail.com",    // Receiver
      replyTo: email || "jayganeshtravels0@gmail.com", // User's email in reply-to
      subject: `New Travel Inquiry From ${name}`,
      html: `
        <h2>🚗 New Travel Inquiry</h2>
        <hr>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>From City:</strong> ${fromCity || "Not specified"}</p>
        <p><strong>To City:</strong> ${toCity || "Not specified"}</p>
        <p><strong>Vehicle Type:</strong> ${vehicle}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${message || "No message"}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    return res.json({ success: true, msg: "Message delivered successfully!" });

  } catch (error) {
    console.error("❌ Email Error:", error);
    return res.json({ success: false, msg: "Failed to send message", error: error.message });
  }
});

// Test endpoint
app.get("/test-email", async (req, res) => {
  try {
    await transporter.sendMail({
      from: "jayganeshtravels0@gmail.com",
      to: "jayganeshtravels0@gmail.com",
      subject: "Test Email from Jay Ganesh Travels",
      text: "✅ Test email sent successfully!"
    });
    res.json({ success: true, msg: "Test email sent!" });
  } catch (error) {
    res.json({ success: false, msg: "Test failed", error: error.message });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("✔ Server running on port " + port));
