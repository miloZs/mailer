const express = require('express');
const router = express.Router();
const loginService = require('./service');

router.post('/api/login', loginService.login);
router.post('/api/add-user', loginService.addUser);

module.exports = router;
