import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ success: false, msg: "Method Not Allowed" });
    return;
  }

  try {
    const { name, mobile, email, fromCity, toCity, vehicle, message } = req.body;

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
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>From:</strong> ${fromCity}</p>
        <p><strong>To:</strong> ${toCity}</p>
        <p><strong>Vehicle:</strong> ${vehicle}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.status(200).json({ success: true, msg: "Message delivered successfully!" });

  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ success: false, msg: "A server error occurred" });
  }
}

  }
}

}
