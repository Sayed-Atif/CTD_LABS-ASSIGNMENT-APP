import nodemailer from "nodemailer";
import asyncHandler from "express-async-handler";
import dotenv from "dotenv";
dotenv.config();

// Send notification email
const sendNotificationMailer = asyncHandler(async (product) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_RECEIVER,
            subject: `Inventory Alert: ${product.name} out of stock`,
            text: `The product ${product.name} is now out of stock.`
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return info;
    } catch (error) {
        console.log('Error sending email: ' + error);
        return null;
    }
});

export default sendNotificationMailer;