var express = require('express');
var router = express.Router();
var register = require('../utils/register');
var auth = require('../utils/authentication');
var resetPassword = require('../utils/resetPassword');
var successMessage = require('../utils/message').successMessage;
var errorMsg = require('../utils/message').errorMessage;

router.get('*', function(req, res) {
	res.sendfile('./public/views/index.html'); // load our public/index.html file
});


module.exports = router;