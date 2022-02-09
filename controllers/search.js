const mongoose = require('mongoose');
const Story = require('../models/Story');

exports.search = (req, res, next) => {
    // todo: This isn't recieving query parameters from the url ?key=value
    // let country = req.body.country;

    Story.find().then((stories) => {
        res.status(201).json({
            searchStories: stories,
        });
    });
};
