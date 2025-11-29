import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // 🔥 CORS FIX
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, mobile, email, fromCity, toCity, vehicle, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "jayganeshtravels0@gmail.com",
        pass: "aukx xuvt zenk scwi",
      },
    });

    await transporter.sendMail({
      from: "jayganeshtravels0@gmail.com",
      to: "jayganeshtravels0@gmail.com",
      subject: `New Inquiry From ${name}`,
      html: `
        <h3>Name:</h3> ${name}
        <h3>Mobile:</h3> ${mobile}
        <h3>Email:</h3> ${email}
        <h3>From:</h3> ${fromCity}
        <h3>To:</h3> ${toCity}
        <h3>Vehicle:</h3> ${vehicle}
        <h3>Message:</h3> ${message}
      `,
    });

    res.status(200).json({ success: true, msg: "Message Sent Successfully!" });

  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
}

}
