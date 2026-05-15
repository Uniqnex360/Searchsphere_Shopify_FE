import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout.tsx";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import Settings from "../pages/Settings";
import Product from "../pages/Products";
import BulkUpload from "../pages/BulkUpload";
import NotFound from "../pages/Error/NotFound";
import ErrorPage from "../pages/Error/Error";
import { productRoutes } from "./product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "products", element: <Products /> },
      { path: "settings", element: <Settings /> },
      { path: "product", element: <Product /> },
      { path: "import", element: <BulkUpload /> },
      ...productRoutes,
    ],
  },

  // 👇 OUTSIDE layout
  {
    path: "/404",
    element: <NotFound />,
  },

  {
    path: "*",
    element: <NotFound />,
  },

  {
    path: "/error",
    element: <ErrorPage />,
  },
]);