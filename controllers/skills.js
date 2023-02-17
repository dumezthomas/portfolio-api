const mongoose = require("mongoose");
const DataModel = mongoose.model("Skill");

exports.getAll = async (req, res) => {
  try {
    const data = await DataModel.find({});
    return res.json(data);
  } catch (error) {
    return res.status(422).send(error.message);
  }
};

exports.getById = async (req, res) => {
  try {
    const data = await DataModel.findById(req.params.id);
    return res.json(data);
  } catch (error) {
    return res.status(422).send(error.message);
  }
};

exports.create = async (req, res) => {
  try {
    const data = new DataModel(req.body);
    data.userId = req.auth?.sub;
    const savedData = await data.save();
    return res.json(savedData);
  } catch (error) {
    return res.status(422).send(error.message);
  }
};

exports.update = async (req, res) => {
  try {
    const updatedData = await DataModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    return res.json(updatedData);
  } catch (error) {
    return res.status(422).send(error.message);
  }
};

exports.deleteById = async (req, res) => {
  try {
    const deletedData = await DataModel.findByIdAndDelete(req.params.id);
    return res.json({ _id: deletedData.id });
  } catch (error) {
    return res.status(422).send(error.message);
  }
};
