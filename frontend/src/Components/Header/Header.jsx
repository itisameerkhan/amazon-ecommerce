import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-main">
      <div className="header">
        <Link to={"/"}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlFU2yi-8lHxGW6OFkkh5yRe7nRonU7sz8niR4tfGDckMPeHFkITe_p3qRL41Eyfw7OdU&usqp=CAU"
            alt="logo"
          />
        </Link>
        <div className="header-2">
          <i className="fa-solid fa-location-dot"></i>
          <div className="header-2-1">
            <p>Delivery to Bangalore</p>
            <p>update location</p>
          </div>
        </div>
        <div className="header-3">
          <div className="header-3-1">
            <p>All</p>
          </div>
          <input type="text" placeholder="Search Amazon.in" />
          <div className="header-3-2">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="header-4">
          <p>Hello user</p>
        </div>
        <div className="header-5">
          <p>Return & Orders</p>
        </div>
        <Link to={"/add/product/new"}>
          <i className="fa-solid fa-plus"></i>
        </Link>
        <div className="header-6">
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
      <div className="header-temp"></div>
    </div>
  );
};

export default Header;
