const express = require('express');
const router = express.Router();
const users = require('../User.json');
const UserController = require('../controllers/UserController');

router.get('/users',(req, res)=>{
    UserController.getUser(req, res);
})
//localhost:3000/users/10
router.get('/user/:id', (req, res)=>{
    UserController.getParticularUser(req, res);
})
module.exports = router;