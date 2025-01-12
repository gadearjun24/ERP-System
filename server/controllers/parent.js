const { Parent } = require("../models/parent");

exports.createParent = async (req, res) => {
  try {
    const parentData = req.body;
    const parent = new Parent(parentData);
    await parent.save();

    res.status(201).json(parent);
    //
  } catch (err) {
    res.status(400).json("Parent already exists.");
  }
};

exports.parentLogin = async (req, res) => {
  try {
    const parentData = req.body;

    const parent = await Parent.findOne({
      email: parentData.email,
      password: parentData.password,
    });

    if (parent) {
      res.status(200).json(parent);
    } else {
      res.status(400).json("Parent not found");
    }
  } catch (err) {
    res.status(404).json(err);
  }
};
