var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');

var UserSchema = new mongoose.Schema({ 
  local: {
    username: { type: String, unique: true, required: true },
    firstName: { type: String, required: true  },
    lastName: { type: String, required: true  },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
  },
  cinemas: [{ type: Schema.Types.ObjectId, ref: 'Cinema' }]
});

//passport - encrypt password
UserSchema.statics.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//passport - check password is the same
UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
}

module.exports = mongoose.model("User", UserSchema);