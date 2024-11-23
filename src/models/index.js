'use strict'
const User = require('./user') //require the model
const Post = require('./post')

async function init() {
await User.sync()
await Post.sync(); // sync the model
// also sync any extra models here
};
Post.belongsTo(User);
User.hasMany(Post);

init();

module.exports = {
User,
Post, // export the model
// also export any extra models here
};