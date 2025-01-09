const express = require('express');
const calculatorController =
require('../controller/calculatorController')
const router = express.Router();
router.get('/add', (req, res) => {
calculatorController.addNumbers(req,res)
})
module.exports = router;