import exp from "express";
import { connect } from "mongoose";
import { empApp } from "./API/EmployeeAPI.js";
import cors from "cors";
const app = exp();

// CORS
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);
// body parser
app.use(exp.json());
// route
app.use("/emp-api", empApp);
// DB connection
const connectDB = async () => {
// 1. Add a log to confirm the env var is loaded
const connectDB = async () => {
  try {
    console.log("MONGO_URI:", process.env.MONGO_URI ? "Found ✅" : "Missing ❌");
    await connect(process.env.MONGO_URI);
    console.log("DB connected");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
  } catch (err) {
    console.log("err in DB connection:", err.message); // 2. Add process.exit so crash is visible
    process.exit(1);
  }
};
};

connectDB();

// error handler
app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);

  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});