import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const { name, email, message, subject } = req.body;

    if (!name || !email || !message || !subject) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const formspreeEndpoint = "https://formspree.io/f/mdkeklne";

    const response = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        subject,
      }),
    });

    if (response.ok) {
      res
        .status(200)
        .json({ success: true, message: "Email sent successfully" });
    } else {
      const errorData = await response.json();
      res
        .status(response.status)
        .json({
          success: false,
          error: errorData.error || "Failed to send email",
        });
    }
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
