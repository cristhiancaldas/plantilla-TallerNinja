const User = require('../models/user.models');
const userController = {};


userController.lstIndex = async (req, res) => {
    const user = await User.find();
    res.render('user/indexUser', {
        user
    });
};

userController.addUser = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.redirect('/');
};

userController.deleteUser = async (req, res) => {
    let {
        id
    } = req.params;
    await User.deleteOne({
        _id: id
    });
    res.redirect('/');
};

userController.userByID = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.render('user/editUser', {
        user
    });
};

userController.updateUser = async (req, res) => {
    const {
        id
    } = req.params;
    await User.update({
        _id: id
    }, req.body);
    res.redirect('/');
};

module.exports = userController;