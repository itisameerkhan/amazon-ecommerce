import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Banner from "./Components/Banner/Banner";
import Add from "./Components/Add/Add.jsx";
import Product from "./Components/Product/Product.jsx";
import ProductDescription from "./Components/ProductDescription/ProductDescription.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: [<Banner />, <Product />],
      },
      {
        path: "/add/product/new",
        element: <Add />,
      },
      {
        path: "/product/:productId",
        element: <ProductDescription />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
