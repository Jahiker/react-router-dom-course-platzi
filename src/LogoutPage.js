import React from "react";

import { useAuth } from "./auth";

export const LogoutPage = () => {
  const auth = useAuth();

  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  }
  return (
    <>
      <h1>Logout</h1>
      <form onSubmit={logout}>
        <label htmlFor="name">Deseas salir?</label>
        <input type="submit" value="Salir" />
      </form>
    </>
  );
};
