// importing necessary modules from node modules
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './config/dbConnection.js';


// importing routes:
import productRoutes from './routes/productRoutes.js';
import sendNotificationRoute from './routes/sendNotificationRoute.js';

import { notFound, errorHandler } from './middlewares/errorMiddleware.js';


import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;


// Dependency middleware:
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());



// Routes middleware:
app.use('/api/products', productRoutes);
app.use('/send-email', sendNotificationRoute);


// Error middleware:
app.use(notFound);
app.use(errorHandler);



// Database connection:
connectDB();


// Server listening on port:
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})