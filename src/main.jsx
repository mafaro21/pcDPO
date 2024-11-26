import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import "primereact/resources/themes/lara-light-blue/theme.css"; // Theme CSS
import "primereact/resources/primereact.min.css"; // Core CSS
import "/node_modules/primeflex/primeflex.css"; // Flex utilities
import NotFound from "./pages/404.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <PrimeReactProvider>
    <RouterProvider router={router} />
  </PrimeReactProvider>
  // </StrictMode>
);
