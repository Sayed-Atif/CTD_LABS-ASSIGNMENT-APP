import express from "express";

const router = express.Router();

import  sendNotificationAction  from "../controllers/sendNotificationController.js";


// @desc Send notification email
// @route POST /sendmail/:id
// @access Public
router.post("/:id", sendNotificationAction);

// Example To test email notification: http://localhost:5000/send-email/667b1578cf27b4539438950a


export default router;