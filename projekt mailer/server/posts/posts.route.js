const express = require('express');
const router = express.Router();
const postsService = require('./service');

router.get('/api/posts', postsService.posts);
// get post put delete 

module.exports = router;
