import { useEffect, useState } from "react";
import "./Product.scss";
import axios from "axios";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

const Product = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:8080/api/get/data");
    setData(response.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) return <h1>loading..</h1>;

  return (
    <div className="product">
      {data.map((data) => (
        <Link to={`/product/${data._id}`}>
          <Card data={data} />
        </Link>
      ))}
    </div>
  );
};

export default Product;
