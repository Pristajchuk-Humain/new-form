import React, { Component } from "react";
import s from "./LoginForm.module.css";

class LoginForm extends Component {
    handleSubmit = evt => {
      evt.preventDefault();
      const form = evt.currentTarget;
      const login = form.elements.login.value;
      const password = form.elements.password.value;
      console.log(login, password);
      this.props.onSumit({ login, password });
      form.reset();
    };
  
    render() {
      return (
        <form  className={s.form} type="onSubmit"onSubmit={this.handleSubmit}>
          <input type="text" name="login" />
          <input type="password" name="password" />
          <button className={s.button} type="submit">Login</button>
        </form>
      );
    }
  }
  
 export default LoginForm
