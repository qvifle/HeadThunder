"use client";
import useMediaQuery from "@/utils/hooks/useMediaQuery";
import React, { ReactNode } from "react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

interface MenuItem {
  href: string;
  children: ReactNode;
}

export interface MenuProps {
  items: MenuItem[];
}

const items: MenuItem[] = [
  {
    href: "/",
    children: "Vacancies",
  },
  {
    href: "/create-vacancy",
    children: "Create vacancy",
  },
  {
    href: "/my-vacancies",
    children: "My vacancies",
  },
];

const Menu = () => {
  const isMobile = useMediaQuery("max", 640);

  if (isMobile === null) {
    return;
  }

  if (isMobile) {
    return <MobileMenu items={items} />;
  }

  return <DesktopMenu items={items} />;
};

export default Menu;
