import React from "react";

import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

export const Menu = () => {
  const auth = useAuth();

  return (
    <nav>
      <ul>
        {routes.map((route) => {
          if (route.private && !auth.user) return null;

          if(route.publicOnly && auth.user) return null;

          return (
            <li key={route.id}>
              <NavLink
                style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
                to={route.to}
                end
              >
                {route.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const routes = [
  {
    id: 1,
    to: "/",
    text: "Home",
    private: false,
  },
  {
    id: 2,
    to: "/blog",
    text: "Blog",
    private: false,
  },
  {
    id: 3,
    to: "/profile",
    text: "Profile",
    private: true,
  },
  {
    id: 4,
    to: "/login",
    text: "Login",
    private: false,
    publicOnly: true
  },
  {
    id: 5,
    to: "/logout",
    text: "Logout",
    private: true,
  },
];
