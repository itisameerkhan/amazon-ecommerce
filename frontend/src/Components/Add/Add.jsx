import { useState } from "react";
import "./Add.scss";
import axios from "axios";

const Add = () => {
  const [data, setData] = useState({
    name: "",
    price: "",
    rating: "",
    description: "",
    specification: "",
    imageURL: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:8080/api/set/data",
        data
      );
      console.log(response.data);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };


  return (
    <div className="add">
      <div>
        <label>name</label>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>price</label>
        <input
          type="number"
          placeholder="price"
          name="price"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>rating</label>
        <input
          type="text"
          placeholder="rating"
          name="rating"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>description</label>
        <input
          type="text"
          placeholder="description"
          name="description"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>specification</label>
        <input
          type="text"
          placeholder="specification"
          name="specification"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>image URL</label>
        <input
          type="text"
          placeholder="image URL"
          name="imageURL"
          onChange={handleChange}
        />
      </div>
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
};

export default Add;
