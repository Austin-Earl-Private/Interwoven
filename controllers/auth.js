const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const varList = require('../utils/variables');

exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    let foundUser;
    User.findOne({ email: email })
        .then((user) => {
            if (!user) {
                const error = new Error('Email/Password combo does not exist.');
                error.statusCode = 401;
                throw error;
            }
            foundUser = user;
            return bcrypt.compare(password, user.password);
        })
        .then((isEqual) => {
            if (!isEqual) {
                const error = new Error('Email/Password combo does not exist.');
                error.statusCode = 401;
                throw error;
            }

            const token = jwt.sign(
                {
                    email: foundUser.email,
                    userId: foundUser._id.toString(),
                    isMod: foundUser.isMod,
                },
                varList.jwtSec,
                { expiresIn: '1h' }
            );

            res.status(200).json({
                message: 'Logged in succefully.',
                userId: foundUser._id.toString(),
                isMod: foundUser.isMod,
                token: token,
            });
        })
        .catch((err) => {
            if (!err.statusCode) {
                err.statusCode = 500;
            } else {
                next(err);
            }
        });
};

exports.signUp = (req, res, next) => {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    bcrypt
        .hash(password, 12)
        .then((hash) => {
            console.log(hash);
            const user = new User({
                email: email,
                name: name,
                password: hash,
            });
            console.log('herer');
            return user.save();
        })
        .then((result) => {
            res.status(200).json({
                message: 'User Created!',
                userId: result._id,
            });
        })
        .catch((err) => catchError(err));
};

function catchError(err, next) {
    if (!err.statusCode) {
        err.statusCode = 500;
    } else {
        next(err);
    }
}

exports.changePassword = (res, req, next) => {
    const userId = req.userId;
    console.log(req.body);
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;

    let foundUser;
    User.findById(userId)
        .then((user) => {
            if (!user) {
                const error = new Error('User does not exist.');
                error.statusCode = 401;
                throw error;
            }
            foundUser = user;
            return bcrypt.compare(oldPassword, user.password);
        })
        .then((isEqual) => {
            if (!isEqual) {
                const error = new Error('Passwords do not match.');
                error.statusCode = 400;
                throw error;
            }
            return bcrypt.hash(newPassword, 12);
        })
        .then((hash) => {
            foundUser.password = hash;
            return foundUser.save();
        })
        .then((result) => {
            res.status(200).json({ message: 'Password sucessfuly changed.' });
        })
        .catch((error) => {
            error.statusCode = 500;
            next(error);
        });
};
