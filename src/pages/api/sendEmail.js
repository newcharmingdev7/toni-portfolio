import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const { name, email, message, subject } = req.body;

    if (!name || !email || !message || !subject) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: '',
        pass: '',
      },
    });

    const mailOptions = {
      from: email,
      to: "letdreamgo77@gmail.com",
      subject: subject,
      text: `From: ${name} (${email})\n\n${message}`,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
