import { RouterProvider } from "react-router-dom";
import "./App.css";
import React from "react";
import router from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer hideProgressBar={true} autoClose={2500} />
    </>
  );
}

export default App;
