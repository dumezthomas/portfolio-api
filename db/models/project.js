const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  project: { type: String, required: true, maxLength: 64 },
  client: { type: String, required: true, maxLength: 32 },
  website: { type: String, maxLength: 128 },
  github: { type: String, maxLength: 128 },
  technologies: [{ type: mongoose.ObjectId, ref: "Skill" }],
  description: { type: String, required: true },
  userId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Project", projectSchema);
