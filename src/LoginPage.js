import React from "react";
import { useAuth } from "./auth";

import { Navigate } from "react-router-dom";

export const LoginPage = () => {
  const auth = useAuth();
  const [username, setUsername] = React.useState("");

  const login = (e) => {
    e.preventDefault();
    auth.login({ username });
  };

  if(auth.user) {
    return <Navigate to="/profile" />
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={login}>
        <label htmlFor="name">Nombre de usuario</label>
        <input
          type="text"
          name="name"
          id="name"
          value={username}
          onChange={(e) => setUsername(e.currentTarget.value)}
        />
        <input type="submit" value="Entrar" />
      </form>
    </>
  );
};
