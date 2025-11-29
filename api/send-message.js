import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, msg: "Method Not Allowed" });
  }

  try {
    const { name, mobile, email, fromCity, toCity, vehicle, message } = req.body;

    if (!name || !mobile || !vehicle) {
      return res.status(400).json({ success: false, msg: "Missing required fields" });
    }

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
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>New Travel Inquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Mobile:</b> ${mobile}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>From City:</b> ${fromCity}</p>
        <p><b>To City:</b> ${toCity}</p>
        <p><b>Vehicle:</b> ${vehicle}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return res.status(200).json({ success: true, msg: "Message delivered successfully!" });

  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return res.status(500).json({
      success: false,
      msg: "Email sending failed",
      error: error.message,
    });
  }
}
