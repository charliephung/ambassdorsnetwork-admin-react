import React from "react";
import Login from "pages/LoginPage";
import Admin from "pages/AdminPage";
import Post from "pages/PostPage";
import Create from "pages/CreatePage";
import SideNavBar from "containers/navbar/SideNavBar";

export const LoginPage = props => <Login {...props} />;
export const AdminPage = props => <Admin {...props} />;
export const SideNav = props => <SideNavBar {...props} />;
export const PostPage = props => <Post {...props} />;
export const CreatePage = props => <Create {...props} />;
