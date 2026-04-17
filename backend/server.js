import exp from "express";
import { connect } from "mongoose";
import { empApp } from "./API/EmployeeAPI.js";
import cors from "cors";
import { config } from "dotenv";
config();
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
  try {
    await connect(process.env.MONGO_URI);  
    console.log("DB connected");
    const PORT = process.env.PORT || 5000;  
    app.listen(PORT, () =>
      console.log(`server listening on port ${PORT}`)
    );
  } catch (err) {
    console.log("err in DB connection", err.message);
  }
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