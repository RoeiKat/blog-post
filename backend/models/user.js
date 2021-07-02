const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
  username: { 
      type: String,
     required: true,
      unique: true,
      trim: true,
      minlength: 4
    },
}, { toJSON: { virtuals: true } });

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
