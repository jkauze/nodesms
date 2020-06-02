const { Router } = require('express');
const router = Router();

const { indexController, postMessage, recieveMessage} = require('../controllers/index.controller')

// Main
router.get('/', indexController)

// Send an sms
router.post('/send-sms', postMessage)

// Recieve an sms
router.post('/recieve-sms', recieveMessage)
module.exports = router;