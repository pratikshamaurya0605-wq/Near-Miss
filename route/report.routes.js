import express from ("express");
import multer from ("multer");
import Report from ("../models/Report");
import twilio from ("twilio");

import router from  express.Router();
import nodemailer from ("nodemailer");
import client from twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH
);

await client.messages.create({
  from: "whatsapp:+14155238886",
  to: "whatsapp:+91XXXXXXXXXX",
  body: "🚨 New Near-Miss Safety Report Submitted"
});

import transporter from nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "yourgmail@gmail.com",
    pass: "your-app-password"
  }
});


import storage from multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) =>
        cb(null, Date.now() + "-" + file.originalname)
});

import upload from multer({ storage });

// Create report
router.post("/", upload.single("image"), async (req, res) => {
    const report = new Report({
        description: req.body.description,
        image: req.file.filename,
        latitude: req.body.latitude,
        longitude: req.body.longimport

    });
    await transporter.sendMail({
     to: "admin@godrej.com",
     subject: "🚨 New Near-Miss Report",
     text: "A new safety hazard has been reported."
    });
})
// Get all reports
router.get("/stats", async (req, res) => {
  const  pending = await Report.countDocuments({ status: "Pending" });
  const progress =  await Report.countDocuments({ status: "In Progress" });
  const resolved =  await Report.countDocuments({ status: "Resolved" });

  res.json({ pending, progress, resolved });
});


// Update status
router.put("/:id", async (req, res) => {
    await Report.findByIdAndUpdate(req.params.id, {
        status: req.body.status
    });
    res.json({ message: "Status updated" });
});

export default router;
