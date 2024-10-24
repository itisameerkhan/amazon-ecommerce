import mongoose from "mongoose";

const dataModel = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  specification: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Store", dataModel);
