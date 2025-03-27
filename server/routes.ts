import express, { type Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema, bookingSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // prefix all routes with /api
  const apiRouter = express.Router();
  app.use("/api", apiRouter);

  // Nodemailer mock transport for development
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.example.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER || "user@example.com",
      pass: process.env.SMTP_PASS || "password",
    },
  });

  // Handle booking requests
  apiRouter.post("/bookings", async (req, res) => {
    try {
      // Validate request body
      const bookingData = bookingSchema.parse(req.body);
      
      // Save booking to storage
      const booking = await storage.createBooking(bookingData);
      
      // Send email notification
      const emailContent = `
        <h1>New Booking Request</h1>
        <p><strong>Name:</strong> ${booking.firstName} ${booking.lastName}</p>
        <p><strong>Email:</strong> ${booking.email}</p>
        <p><strong>Phone:</strong> ${booking.phone}</p>
        <p><strong>Check-in:</strong> ${booking.checkIn}</p>
        <p><strong>Check-out:</strong> ${booking.checkOut}</p>
        <p><strong>Room Type:</strong> ${booking.roomType}</p>
        <p><strong>Guests:</strong> ${booking.guests}</p>
        <p><strong>Special Requests:</strong> ${booking.specialRequests || "None"}</p>
      `;
      
      // We don't await this to avoid delaying the response
      transporter.sendMail({
        from: process.env.EMAIL_FROM || '"Number 5 B&B" <info@number5bnb.com>',
        to: process.env.EMAIL_TO || "bookings@number5bnb.com",
        subject: `New Booking Request - ${booking.firstName} ${booking.lastName}`,
        html: emailContent,
      }).catch(error => {
        console.error("Error sending booking email:", error);
      });
      
      // Send confirmation email to guest
      const confirmationContent = `
        <h1>Thank you for your booking request!</h1>
        <p>Dear ${booking.firstName},</p>
        <p>We've received your booking request for Number 5 B&B. We'll get back to you within 24 hours to confirm your reservation.</p>
        <p><strong>Your booking details:</strong></p>
        <ul>
          <li>Check-in: ${booking.checkIn}</li>
          <li>Check-out: ${booking.checkOut}</li>
          <li>Room Type: ${booking.roomType}</li>
          <li>Guests: ${booking.guests}</li>
        </ul>
        <p>If you have any questions, please don't hesitate to contact us.</p>
        <p>Best regards,</p>
        <p>The Number 5 B&B Team</p>
      `;
      
      transporter.sendMail({
        from: process.env.EMAIL_FROM || '"Number 5 B&B" <info@number5bnb.com>',
        to: booking.email,
        subject: `Your Booking Request - Number 5 B&B`,
        html: confirmationContent,
      }).catch(error => {
        console.error("Error sending confirmation email:", error);
      });
      
      res.status(201).json({
        message: "Booking request submitted successfully",
        booking: {
          id: booking.id,
          firstName: booking.firstName,
          lastName: booking.lastName,
          email: booking.email,
        },
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        console.error("Error creating booking:", error);
        res.status(500).json({ message: "Failed to create booking" });
      }
    }
  });

  // Handle contact form submissions
  apiRouter.post("/contact", async (req, res) => {
    try {
      // Validate request body
      const contactData = contactSchema.parse(req.body);
      
      // Save contact to storage
      const contact = await storage.createContact(contactData);
      
      // Send email notification
      const emailContent = `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${contact.name}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        <p><strong>Subject:</strong> ${contact.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${contact.message}</p>
      `;
      
      // We don't await this to avoid delaying the response
      transporter.sendMail({
        from: process.env.EMAIL_FROM || '"Number 5 B&B" <info@number5bnb.com>',
        to: process.env.EMAIL_TO || "info@number5bnb.com",
        subject: `New Contact Form: ${contact.subject}`,
        html: emailContent,
      }).catch(error => {
        console.error("Error sending contact email:", error);
      });
      
      // Send confirmation email
      const confirmationContent = `
        <h1>Thank you for contacting Number 5 B&B</h1>
        <p>Dear ${contact.name},</p>
        <p>We've received your message and will get back to you as soon as possible.</p>
        <p>Best regards,</p>
        <p>The Number 5 B&B Team</p>
      `;
      
      transporter.sendMail({
        from: process.env.EMAIL_FROM || '"Number 5 B&B" <info@number5bnb.com>',
        to: contact.email,
        subject: `We've received your message - Number 5 B&B`,
        html: confirmationContent,
      }).catch(error => {
        console.error("Error sending confirmation email:", error);
      });
      
      res.status(201).json({
        message: "Contact form submitted successfully",
        contact: {
          id: contact.id,
          name: contact.name,
          email: contact.email,
          subject: contact.subject,
        },
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        console.error("Error processing contact form:", error);
        res.status(500).json({ message: "Failed to submit contact form" });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
