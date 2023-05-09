const Comment = require("./Comment");
const Like = require("./Like");
const Post = require("./Post");
const Profile = require("./Profile");
const User = require("./User");

User.hasOne(Profile, { onDelete: 'cascade' });
Profile.belongsTo(User);

User.hasMany(Post, { onDelete: 'cascade' });
Post.belongsTo(User);

Post.hasMany(Comment, { onDelete: 'cascade' });
Comment.belongsTo(Post);

User.belongsToMany(Post, { through: Like, as: 'LikedPosts' });
Post.belongsToMany(User, { through: Like, as: 'LikedByUsers' });

sequelize.sync()
  .then(() => console.log('Database synchronized successfully'))
  .catch((err) => console.log('Error synchronizing database:', err));

module.exports = {
    Comment,
    Like,
    Post,
    Profile,
    User
}