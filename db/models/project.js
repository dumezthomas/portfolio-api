const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  project: { type: String, required: true, maxlength: 64 },
  client: { type: String, required: true, maxlength: 32 },
  website: { type: String, required: true, maxlength: 128 },
  technologies: { type: String, required: true, maxlength: 64 },
  description: { type: String, required: true },
  userId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Project", projectSchema);
