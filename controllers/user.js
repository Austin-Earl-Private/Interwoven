const mongoose = require('mongoose');
const Story = require('../models/Story');
const User = require('../models/User');
exports.getProfile = (req, res, next) => {
    const userId = req.query.userId;
    let foundUser;
    User.findById(userId)
        .then((user) => {
            if (!user) {
                throw new Error('Could not find user, Try again.');
            }

            foundUser = user;
            return Story.find({ creator: user._id, approved: true });
        })
        .then((storyList) => {
            return res.status(200).json({
                first_name: foundUser.first_name,
                last_name: foundUser.last_name,
                email: foundUser.email,
                stories: storyList,
            });
        })
        .catch((err) => {
            err.statusCode = 500;
            next(err);
        });
};
