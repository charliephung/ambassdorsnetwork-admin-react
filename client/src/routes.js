import React from "react";
import DynamicImport from "components/feature/DynamicImport";
import Spinner from "components/common/loading/Spinner";

export const routes = [
  {
    path: "/login",
    exact: true,
    import: () => import("pages/LoginPage"),
    loading: <Spinner />,
    type: "guest"
  },
  {
    path: "/",
    exact: true,
    import: () => import("pages/LoginPage"),
    loading: <Spinner />,
    type: "guest"
  },
  {
    path: "/posts",
    exact: true,
    import: () => import("pages/AdminPage"),
    loading: <Spinner />,
    type: "auth"
  },
  {
    path: "/posts/:ambassadorId/post/:postId",
    import: () => import("pages/PostPage"),
    exact: true,
    loading: <Spinner />,
    type: "auth"
  },
  {
    path: "/posts/create",
    exact: true,
    import: () => import("pages/CreatePage"),
    loading: <Spinner />,
    type: "auth"
  },
  {
    path: "/posts/image",
    exact: true,
    import: () => import("pages/ImagePage"),
    loading: <Spinner />,
    type: "auth"
  },
  {
    path: "/posts/news",
    exact: true,
    import: () => import("pages/NewsPage"),
    loading: <Spinner />,
    type: "auth"
  },
  {
    path: "/posts/users",
    exact: true,
    import: () => import("pages/UserPage"),
    loading: <Spinner />,
    type: "auth"
  }
];

export const SideNav = props => (
  <DynamicImport
    load={() => import("containers/navbar/SideNavBar")}
    render={Comp => (Comp === null ? <Spinner /> : <Comp {...props} />)}
  />
);
