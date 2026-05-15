import { createBrowserRouter, Navigate } from "react-router-dom";

import Layout from "../components/Layout.tsx";

import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import Settings from "../pages/Settings";
import Product from "../pages/Products";
import BulkUpload from "../pages/BulkUpload";

import NotFound from "../pages/Error/NotFound";
import ErrorPage from "../pages/Error/Error";

import Welcome from "../pages/Welcome.tsx";
import PrivacyPolicy from "../pages/PrivacyPolicy.tsx";

import { productRoutes } from "./product";

// ========================================
// PROTECTED ROUTE
// ========================================
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const visited = localStorage.getItem("welcome_completed");

  if (!visited) {
    return <Navigate to="/welcome" replace />;
  }

  return children;
}

// ========================================
// ROUTER
// ========================================
export const router = createBrowserRouter([
  // Welcome page
  {
    path: "/welcome",
    element: <Welcome />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },

  // Protected app routes
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
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

  // Errors
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
