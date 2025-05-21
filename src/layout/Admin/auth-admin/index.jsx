import { Outlet } from "react-router-dom";
import React from "react";

const AuthLayoutAdmin = () => {
  return (
    <div id="auth-layout-admin" >
      <Outlet />
    </div>
  );
};

export default AuthLayoutAdmin;
