require('dotenv').config();

module.exports = {
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
    phone: process.env.PHONENUMBER_VERIFIED
}