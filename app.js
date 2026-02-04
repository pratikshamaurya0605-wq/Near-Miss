const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const reportRoutes = require("./route/report.routes");
const adminRoutes = require("./route/admin.routes");

const app = express();

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
