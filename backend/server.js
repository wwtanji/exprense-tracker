require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./app/config/db");
const authRoutes = require("./app/routes/authRoutes");
const incomeRoutes = require("./app/routes/incomeRoutes");
const expenseRoutes = require("./app/routes/expenseRoutes");
const dashboardRoutes = require("./app/routes/dashboardRoutes");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

connectDB();

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/income", incomeRoutes);
app.use("/api/v1/expense", expenseRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);

app.use("/uploads", express.static(path.join(__dirname, "app/uploads")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
