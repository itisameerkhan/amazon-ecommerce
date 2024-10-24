import React from "react";
import Header from "./Components/Header/Header";
import HeaderB from "./Components/HeaderB/HeaderB";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <HeaderB />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
