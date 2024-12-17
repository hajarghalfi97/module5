const express = require('express');

const router = express.Router();

router.get('/example1', (req, res) => {
res.send('Hello World1!')
})

router.get('/example2', (req, res) => {
res.send('hello world2')
})

module.exports = router;