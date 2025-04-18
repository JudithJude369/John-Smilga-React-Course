import React from "react";
import MenuItems from "./MenuItems";

const Menu = ({ menuItem }) => {
  return (
    <div className="section-center">
      {menuItem.map((items) => {
        return <MenuItems key={items.id} {...items} />;
      })}
    </div>
  );
};

export default Menu;
