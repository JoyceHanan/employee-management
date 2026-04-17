import exp from "express";
import { connect } from "mongoose";
import { empApp } from "./API/EmployeeAPI.js";
import cors from "cors";
import { config } from "dotenv";

config();

const app = exp();

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.use(exp.json());

app.use("/emp-api", empApp);

const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI);
    console.log("DB connected");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () =>
      console.log(`server running on port ${PORT}`)
    );
  } catch (err) {
    console.log("err in DB connection", err.message);
  }
};

connectDB();

app.use((err, req, res, next) => {
  console.log("err:", err.message);
  res.status(500).json({ message: err.message });
});