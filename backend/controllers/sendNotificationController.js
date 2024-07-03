import asyncHandler from "express-async-handler";
import sendNotificationMailer from "../utils/notificationMailer.js";
import Product from "../models/productModel.js";
import SendNotification from "../models/sendNotificationModel.js";

export const sendNotificationAction = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        res.status(404);
        throw new Error("Product not found");
    }

    if (product.quantity === 0) {
        try {
            const emailResponse = await sendNotificationMailer(product);

            if (emailResponse) {
                await SendNotification.create({
                    name: product.name,
                    quantity: product.quantity,
                    receiverEmail: process.env.EMAIL_RECEIVER,
                    emailSubject: `Inventory Alert: ${product.name} out of stock`,
                    emailBody: `The product ${product.name} is now out of stock.`,
                    notificationDate: new Date(),
                });

                res.status(200).json({ message: "Email sent and notification saved to database successfully" });
            } else {
                res.status(500).json({ message: "Failed to send email" });
            }
        } catch (error) {
            res.status(500).json({ message: "An error occurred while sending the notification email" });
        }
    } else {
        res.status(400).json({ message: "Product quantity is not zero" });
    }
});

export default sendNotificationAction;