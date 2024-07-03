import mongoose from "mongoose";


const sendNotificationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    } ,
    quantity: {
        type: Number,
        required: true,
    },
    receiverEmail: {
        type: String,
        required: true,
        unique: true
    },
    emailSubject: {
        type: String,
        required: true
    },
    emailBody: {
        type: String,
        required: true
    },
    notificationDate: {
        type: Date,
        default: Date.now
    },
  
   
    
});

const SendNotification = mongoose.model("SendNotification", sendNotificationSchema);

export default SendNotification;