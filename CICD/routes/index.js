const express = require('express');
const router = express.Router();
const user = require('../controllers/user');

const middleware = require('../utils/middleware');

router.post('/register', user.register);
router.post('/login', user.login);
router.get('/whoami', middleware.auth, user.whoami);

module.exports = router;