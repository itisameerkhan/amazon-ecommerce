import { useEffect, useState } from "react";
import "./Product.scss";
import axios from "axios";
import Card from "../Card/Card";

const Product = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:8080/api/get/data");
    setData(response.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if(!data) return <h1>loading..</h1>

  return (
    <div className="product">
      {data.map((data) => (
        <Card data={data} />
      ))}
    </div>
  );
};

export default Product;
