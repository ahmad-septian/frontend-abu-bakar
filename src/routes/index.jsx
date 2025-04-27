import { createBrowserRouter, redirect } from "react-router-dom";
import DefaultLayout from "../layout/sidebar";
import Dashboard from "../pages/admin/dashboard";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <DefaultLayout />,
    errorElement: "",
    children: [
      {
        path: "",
        // loader: checkAdminAuth,
        loaderData: () => redirect("dashboard"),
      },
      {
        path: "dashboard",
        // loader: checkAdminAuth,
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
