import React, { FC } from "react";
import { MenuProps } from ".";
import MenuItem from "./MenuItem";

const DesktopMenu: FC<MenuProps> = ({ items }) => {
  return (
    <ul className="flex items-center gap-4">
      {items.map(({ children, href }, key) => (
        <MenuItem key={key} href={href}>
          {children}
        </MenuItem>
      ))}
    </ul>
  );
};

export default DesktopMenu;
