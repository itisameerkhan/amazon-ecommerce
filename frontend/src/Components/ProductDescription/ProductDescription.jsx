import { useEffect, useState } from "react";
import "./ProductDescription.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDescription = () => {
  const productId = useParams().productId;
  console.log(productId);
  const [data, setData] = useState(null);

  const getData = async () => {
    const response = await axios.post("http://localhost:8080/api/get/product", {
      id: productId,
    });

    console.log(response);
    setData(response.data.data[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!data) return <h2>loading</h2>;

  return (
    <div className="product-desc">
      <div className="product-desc-1">
        <img src={data.imageURL} alt="img" />
      </div>
      <div className="product-desc-2">
        <p>{data.name}</p>
        <h3>Rs. {data.price}</h3>
        <div className="btn-div">
          <button>ADD TO CART</button>
          <button>BUY NOW</button>
        </div>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default ProductDescription;
