import React from "react";
import Header from "./Header";
import Input from "./user/Inputs";
// import "./Button"

const Login = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="login__container">
        <h1 className="login__title">LOGIN</h1>
        <form>
          <Input placeholder="Usuario" />
          <Input placeholder="Contraseña" />
          {/* <Button /> */}
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
