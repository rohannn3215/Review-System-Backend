import express from 'express';
import dotenv from 'dotenv';
import dbconnect from './config/database.js';
import router from './routes/FeedbackRoutes.js';

const app =express();

const PORT=5050;
app.use(express.json());
app.use("/api/v1",router)
dotenv.config();

dbconnect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})