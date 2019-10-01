import React from "react";
import Header from "../Header";
import ListUserItem from "./ListUserItem";
import ListUserStatus from "./ListUserStatus";
import AsideBar from "../AsideBar";
import "../../stylesheets/components/User.scss";
import "../../stylesheets/App.scss";
import ListGestorDetail from "../leader/ListGestorDetail";

const UserList = props => {
  return (
    <div className="usermain">
      <Header />
      <div className="mainwrap">
        <h2 className="mainwrap__title">Solicitudes</h2>
        <ListUserStatus />
        <ListUserItem />
      </div>
      <ListGestorDetail />

      <React.Fragment>
        <AsideBar />
      </React.Fragment>
    </div>
  );
};

export default UserList;
