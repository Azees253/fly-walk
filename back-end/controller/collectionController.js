import collectionModel from "../models/collectionmodel.js";
import fs from "fs";

// add collection item

const addCollection = async (req, res) => {
  let image_file = `${req.file && req.file.filename}`;

  const collection = new collectionModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_file,
  });
  try {
    await collection.save();
    res.json({
      success: true,
      message: "Collection added successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Collection not added",
    });
  }
};

// all collection list

const listCollection = async (req, res) => {
  try {
    const collection = await collectionModel.find({});
    res.json({
      success: true,
      data: collection,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Collection not found",
    });
  }
};

// remmove collection

const removeCollection = async (req, res) => {
  try {
    const collection = await collectionModel.findById(req.body.id);
    fs.unlink(`uploads/${collection.image}`, () => {});
    await collectionModel.findByIdAndDelete(req.body.id);
    res.json({
      success: true,
      message: "Collection removed successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Collection not removed",
    });
  }
};
export { addCollection, listCollection, removeCollection };
