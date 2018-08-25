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
    path: "/posts",
    exact: false,
    import: () => import("containers/navbar/SideNavBar"),
    loading: <Spinner />,
    type: "auth"
  }
];

export const LoginPage = props => (
  <DynamicImport
    load={() => import("pages/LoginPage")}
    render={Comp => (Comp === null ? <Spinner /> : <Comp {...props} />)}
  />
);
export const AdminPage = props => (
  <DynamicImport
    load={() => import("pages/AdminPage")}
    render={Comp => (Comp === null ? <Spinner /> : <Comp {...props} />)}
  />
);
export const PostPage = props => (
  <DynamicImport
    load={() => import("pages/PostPage")}
    render={Comp => (Comp === null ? <Spinner /> : <Comp {...props} />)}
  />
);
export const CreatePage = props => (
  <DynamicImport
    load={() => import("pages/CreatePage")}
    render={Comp => (Comp === null ? <Spinner /> : <Comp {...props} />)}
  />
);
export const ImagePage = props => (
  <DynamicImport
    load={() => import("pages/ImagePage")}
    render={Comp => (Comp === null ? <Spinner /> : <Comp {...props} />)}
  />
);
export const NewsPage = props => (
  <DynamicImport
    load={() => import("pages/NewsPage")}
    render={Comp => (Comp === null ? <Spinner /> : <Comp {...props} />)}
  />
);
export const SideNav = props => (
  <DynamicImport
    load={() => import("containers/navbar/SideNavBar")}
    render={Comp => (Comp === null ? <Spinner /> : <Comp {...props} />)}
  />
);
