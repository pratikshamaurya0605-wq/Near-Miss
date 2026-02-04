import express from ("express");
import mongoose from("mongoose");
import path from("path");
import dotenv from "dotenv";
dotenv.config();

import reportRoutes from ("./route/report.routes");
import adminRoutes from ("./route/admin.routes");

import app from express();

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB Connected"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/reports", reportRoutes);
app.use("/api/admin", adminRoutes);

app.listen(3000, () =>
    console.log("🚀 Server running at http://localhost:3000")
);
