import React, { useState } from "react";
import * as Components from "./auth.styled";
import axios from "../../utility/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [signIn, toggle] = useState(true);
  const [value, setValue] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (name) => (e) => {
    setValue({ ...value, [name]: e.target.value });
  };
  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:5000/user/register", {
        username: value.username,
        email: value.email,
        password: value.password,
      });
      toast.success("Register Success! Please login");
      toggle(true);
    } catch (error) {
      toast.error("Register error!");
    }
  };
  return (
    <Components.Container>
      <ToastContainer />
      {/* <Link to='/'>
        <img src={logo} alt='logo' className={style.logo} />
      </Link> */}
      <Components.FormContainer>
        <Components.LoginContainer signingIn={signIn}>
          <Components.LoginForm>
            <Components.Input
              placeholder="Email"
              type="email"
              name="email"
              onChange={handleChange("email")}
            />
            <Components.Input
              placeholder="Username"
              name="username"
              type="text"
              onChange={handleChange("username")}
            />
            <Components.Input
              placeholder="Password"
              name="password"
              type="password"
              onChange={handleChange("password")}
            />
            <Components.BtnLogin variant="contained" onClick={handleRegister}>
              Register →
            </Components.BtnLogin>
            <p>
              Already registered?&nbsp;
              <Components.CreateAccount to="/auth/login">
                Sign in here.
              </Components.CreateAccount>
            </p>

            <Components.CreateAccount>
              Forgot your password?
            </Components.CreateAccount>
          </Components.LoginForm>
        </Components.LoginContainer>
      </Components.FormContainer>
    </Components.Container>
  );
}
