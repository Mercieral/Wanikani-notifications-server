const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('forgot_password');
});

module.exports = router;
