import React from "react";
import Loadable from "react-loadable";

export const LoginPage = Loadable({
  loader: () => import("pages/LoginPage"),
  loading: () => <h1>Loading...</h1>
});

export const AdminPage = Loadable({
  loader: () => import("pages/AdminPage"),
  loading: () => <h1>Loading...</h1>
});

export const SideNav = Loadable({
  loader: () => import("containers/navbar/SideNavContainer"),
  loading: () => <h1>Loading...</h1>
});
