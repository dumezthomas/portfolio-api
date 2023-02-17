const mongoose = require("mongoose");
const config = require("../config");

require("./models/skill");
require("./models/project");

exports.dbConnect = async () => {
  mongoose.set("strictQuery", false);
  try {
    await mongoose.connect(config.DB_URI);
    console.log("Connected to DB");
  } catch (err) {
    console.error(err);
  }
};
