const express = require('express');
const router = express.Router();
const users = require('../controllers/usersControllers');


router.post('/',(req,res) => users.createNewUser(req,res));
router.get('/',(req,res) => users.getAllUsers(req,res));
router.delete('/',(req,res) => users.deleteUserAcount(req,res));


module.exports = router;