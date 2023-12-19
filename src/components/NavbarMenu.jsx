import React from "react";

export const NavbarMenu = () => {
  const navMenuList = [
    {
      id: 1,
      name: "Home",
      destination: "/",
    },
    {
      id: 2,
      name: "Products",
      destination: "",
    },
    {
      id: 3,
      name: "About Us",
      destination: "#about",
    },
  ];

  return (
    <ul>
      {navMenuList.map((item) => {
        return (
          <li key={item.id}>
            <a href={item.destination}>{item.name}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarMenu;
