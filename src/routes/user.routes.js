const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controllers');

router.route('/')
    .get(userController.lstIndex);

router.route('/add')
    .post(userController.addUser);

router.route('/delete/:id')
    .get(userController.deleteUser);

router.route('/edit/:id')
    .get(userController.userByID);

router.route('/update/:id')
    .post(userController.updateUser);

module.exports = router;