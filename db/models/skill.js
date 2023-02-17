const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorieArray = [
  "Programming Language",
  "Web",
  "Web Framework",
  "Database",
  "Tool",
  "Software",
  "System",
];

const skillSchema = new Schema({
  name: { type: String, required: true, maxLength: 32 },
  logo: { type: String, lowercase: true, maxLength: 32 },
  logoColor: { type: String, uppercase: true, minLength: 6, maxLength: 6 },
  showcase: { type: Boolean, required: true },
  categorie: { type: String, enum: categorieArray, required: true },
  userId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Skill", skillSchema);
