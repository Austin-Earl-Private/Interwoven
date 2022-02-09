const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        isMod: { type: Boolean, default: false },

        // stories: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: 'Story',
        //     },
        // ],
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
