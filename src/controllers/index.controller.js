const { sendMessage } = require('../twilio/send-sms')
const SMS = require('../models/sms');

const indexController = async (req, res) => {
    const messages = await SMS.find().lean();
    res.render('index', { messages })
}

const postMessage = async (req, res) => {
    const { message, phone } = req.body
    if (!message || !phone) {
        return res.json('Missing some fields (body or phone');
    }
    const response = await sendMessage(req.body.message, req.body.phone)
    await SMS.create({ Body: req.body.message, To: req.body.phone })

    console.log(response.sid)
    res.redirect('/')
};

const recieveMessage = async (req, res) =>{

}

module.exports = {
    indexController,
    postMessage,
    recieveMessage
}