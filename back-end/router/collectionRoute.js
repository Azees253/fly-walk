import express from "express";
import {
  addCollection,
  listCollection,
  removeCollection,
} from "../controller/collectionController.js";
import multer from "multer";

const collectionRouter = express.Router();

// image storage

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

collectionRouter.post("/add", upload.single("image"), addCollection);
collectionRouter.get("/list", listCollection);
collectionRouter.post("/remove", removeCollection);

export default collectionRouter;
