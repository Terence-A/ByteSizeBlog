const User = require("./User");
const Post = require("./post");
console.log("am i exporting");
Post.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});
module.exports = { User, Post };
