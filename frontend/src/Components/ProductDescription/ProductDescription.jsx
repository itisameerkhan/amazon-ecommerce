import { useEffect } from "react";
import "./ProductDescription.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDescription = () => {
  const productId = useParams().productId;
  console.log(productId);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.post("http://localhost:8080/api/get/product", {
      id: productId,
    });

    console.log(response);
  };

  return <div>ProductDescription</div>;
};

export default ProductDescription;
