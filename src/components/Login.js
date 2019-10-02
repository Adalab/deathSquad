import React from "react";
import Header from "./Header";

import Input from "./user/Inputs";
import "./../stylesheets/components/Login.scss";
import data from "../services/data";
// import "./Button"

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.login();
  }

  login() {
    data().then(data => {
      console.log(data);
    });
  }
  // const username = this.state.username;
  // const password = this.state.password;

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="login__container">
          <h1 className="login__title">LOGIN</h1>
          <form>
            <Input placeholder="Usuario" />
            <Input placeholder="Contraseña" />
            <button className="btnPrueba">Acceder</button>
            {/* <Button /> */}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
