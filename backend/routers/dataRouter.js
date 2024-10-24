import express from "express";
import {
  getDataFunction,
  setDataFunction,
} from "../controller/dataController.js";

const router = express.Router();

router.route("/get/data").get(getDataFunction);
router.route("/set/data").post(setDataFunction);

export default router;
