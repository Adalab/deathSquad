import React from "react";
import ListUserItem from "./ListUserItem";
import ListUserStatus from "./ListUserStatus";
import AsideBar from "../AsideBar";
import "../../stylesheets/components/User.scss";
import "../../stylesheets/App.scss";
import Button from "../Button";
import { Link } from "react-router-dom";

const UserList = props => {
  return (
    <div className="mainwrapmain row">
      <AsideBar />
      <div className="mainwrap col-9">
        <h2 className="mainwrap__title">Solicitudes</h2>
        <ListUserStatus />
        <ListUserItem />
        <Link to="/user/form">
          <Button name="Nueva Petición" />
        </Link>
      </div>
    </div>
  );
};

export default UserList;
