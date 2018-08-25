import React from "react";
import DynamicImport from "components/feature/DynamicImport";
import Spinner from "components/loading/Spinner";
// import Login from "pages/LoginPage";
// import Admin from "pages/AdminPage";
// import Post from "pages/PostPage";
// import Create from "pages/CreatePage";
// import Image from "pages/ImagePage";
// import SideNavBar from "containers/navbar/SideNavBar";

export const LoginPage = props => (
  <DynamicImport
    load={() => import("pages/LoginPage")}
    render={Comp => (Comp !== null ? <Spinner /> : <Comp {...props} />)}
  />
);

export const AdminPage = props => (
  <DynamicImport
    load={() => import("pages/AdminPage")}
    render={Comp => (Comp !== null ? <Spinner /> : <Comp {...props} />)}
  />
);
export const PostPage = props => (
  <DynamicImport
    load={() => import("pages/PostPage")}
    render={Comp => (Comp !== null ? <Spinner /> : <Comp {...props} />)}
  />
);
export const CreatePage = props => (
  <DynamicImport
    load={() => import("pages/CreatePage")}
    render={Comp => (Comp !== null ? <Spinner /> : <Comp {...props} />)}
  />
);
export const ImagePage = props => (
  <DynamicImport
    load={() => import("pages/ImagePage")}
    render={Comp => (Comp !== null ? <Spinner /> : <Comp {...props} />)}
  />
);
export const SideNav = props => (
  <DynamicImport
    load={() => import("containers/navbar/SideNavBar")}
    render={Comp => (Comp !== null ? <Spinner /> : <Comp {...props} />)}
  />
);
