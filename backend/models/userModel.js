const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  uid: String,
  problems: [{ title: String }],
});

module.exports = mongoose.model("User", UserSchema);
