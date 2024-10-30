import express from "express";
import {
  getDataFunction,
  getProductFunction,
  setDataFunction,
} from "../controller/dataController.js";

const router = express.Router();

router.route("/get/data").get(getDataFunction);
router.route("/set/data").post(setDataFunction);
router.route("/get/product").post(getProductFunction)

export default router;
