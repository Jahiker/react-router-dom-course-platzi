import React from "react";

import { NavLink } from "react-router-dom";

export const Menu = () => {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route.id}>
            <NavLink
              style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
              to={route.to}
              end
            >
              {route.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const routes = [
  {
    id: 1,
    to: "/",
    text: "Home",
  },
  {
    id: 2,
    to: "/blog",
    text: "Blog",
  },
  {
    id: 3,
    to: "/profile",
    text: "Profile",
  },
  {
    id: 4,
    to: "/login",
    text: "Login",
  },
  {
    id: 5,
    to: "/logout",
    text: "Logout",
  },
];
