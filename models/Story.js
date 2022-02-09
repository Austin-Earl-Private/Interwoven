const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storySchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        creator: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        country_code: String,
        approved: Boolean,
    },
    { timestamps: true }
);

module.exports = mongoose.model('Story', storySchema);
