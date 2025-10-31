"use server";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY || "",
});

export async function sendContactEmail(
  name: string,
  email: string,
  message: string
) {
  try {
    if (!process.env.MAILERSEND_API_KEY) {
      throw new Error("MAILERSEND_API_KEY is not configured");
    }

    const sentFrom = new Sender(
      process.env.MAILERSEND_SENDER_EMAIL || "",
      process.env.MAILERSEND_SENDER_NAME || ""
    );

    const recipients = [
      new Recipient(
        process.env.MAILERSEND_SENDER_EMAIL || "",
        process.env.MAILERSEND_SENDER_NAME || ""
      ),
    ];

    const replyTo = new Sender(email, name);

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(replyTo)
      .setSubject("New Contact Message from Dazzsoft Website")
      .setHtml(
        `<h1>New Contact Message</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>`
      )
      .setText(
        `New Contact Message\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
      );

    await mailerSend.email.send(emailParams);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Failed to send email" };
  }
}
