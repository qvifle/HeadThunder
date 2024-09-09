"use client";
import React, { FC, useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { cn } from "@/utils/helpers/cn";
import MenuItem from "./MenuItem";
import { MenuProps } from ".";
import { useClickAway } from "@uidotdev/usehooks";

const MobileMenu: FC<MenuProps> = ({ items }) => {
  const [isVisible, setVisible] = useState(false);
  const ref = useClickAway(() => {
    setVisible(false);
  });

  return (
    <>
      <button onClick={() => setVisible(true)}>
        <MenuIcon color="rgb(229 229 229)" />
      </button>
      <div
        ref={ref as any}
        className={cn(
          "absolute rounded-b-[20px] shadow-2xl bg-neutral-950 py-3 px-2 w-full text-center text-neutral-200 top-0 left-0 duration-200 delay-100",
          isVisible ? "top-0" : "top-[-108px]"
        )}>
        <button
          onClick={() => setVisible(false)}
          className={cn(
            "absolute top-3 right-2 delay-200 duration-200",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
          <X color="rgb(229 229 229)" />
        </button>

        <ul className="flex flex-col items-center gap-2">
          {items.map((item, key) => (
            <MenuItem
              onClick={() => setVisible(false)}
              href={item.href}
              key={key}>
              {item.children}
            </MenuItem>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
