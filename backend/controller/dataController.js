import Store from "../model/dataModel.js";

export const getDataFunction = async (req, res) => {
  try {
    const response = await Store.find();

    res.json({
      success: true,
      message: "data fetched successfully",
      data: response,
    });
  } catch (e) {
    console.log(e);
  }
};

export const setDataFunction = async (req, res) => {
  console.log(req.body);

  await Store.create(req.body);

  res.json({
    success: true,
    message: "OK👍",
    data: req.body,
  });
};

export const getProductFunction = async (req, res) => {
  try {
    const response = await Store.find({ _id: req.body.id });
    console.log(response);
    res.json({
      success: true,
      message: "product data fetched successfully",
      data: response,
    });
  } catch (e) {
    console.log(e);
  }
};
