import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const token = sessionStorage.getItem("token");
  console.log("this is your token:", token);

  const handleClick = () => {
    actions.login(email, password).then(() => {
      Navigate.push("/");
    });
  };

  return (
    <div className="text-center mt-5">
      <h1>Login</h1>
      {token && token != "" && token != undefined ? (
        "You are loggend in whit this token" + token
      ) : (
        <div>
          <input
            type="text"
            placeholder="E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleClick}>Login</button>
        </div>
      )}
    </div>
  );
};
