import { Outlet } from "react-router-dom";
import React from "react";

const AuthLayout = () => {
  return (
    <div id="auth-layout">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
