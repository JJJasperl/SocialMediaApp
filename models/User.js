const { model, Schema} = require ('mongoose');

const userSchema = new Schema({
    username: String,
    passsword: String,
    email: String,
    creatdAt: String
});

module.exports = model('User', userSchema);