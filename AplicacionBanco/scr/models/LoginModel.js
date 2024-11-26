const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Cambié require a required
  RFC: { type: String, required: true },
  role: { type: String, required: true },
  status: { type: String, required: true }, // Corrige el typo de "statius"
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("users", UsersSchema);

module.exports = User;
