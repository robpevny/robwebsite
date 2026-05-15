// Serverless email handler (Vercel / similar).
// Deploy this file as a serverless function at /api/book.
// It uses nodemailer and requires these environment variables to be set in your hosting platform:
// SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, EMAIL_TO
// Example (Vercel):
//   vercel env add SMTP_HOST

/// <reference types="node" />

import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    res.status(400).json({ error: "Missing fields" });
    return;
  }

  // Read SMTP config from environment
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.EMAIL_TO || "rob.pevny@gmail.com";

  if (!host || !user || !pass) {
    res.status(500).json({ error: "SMTP not configured on the server" });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for other ports
      auth: {
        user,
        pass,
      },
    });

    const subject = `Coaching request from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    await transporter.sendMail({
      from: user,
      to,
      subject,
      text,
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>`,
    });

    res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error("Error sending email:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
}

function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
