"use client";
import React, { FC, HTMLAttributes, ReactNode, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

interface MenuItem {
  href: string;
  children: ReactNode;
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

interface MenuItemProps extends HTMLAttributes<HTMLLIElement> {
  onAction: () => void;
}

const MenuItem: FC<MenuItemProps> = ({ children, onAction }) => {
  return (
    <NavbarMenuItem>
      <Button variant="flat" onClick={onAction} className="w-full">
        {children}
      </Button>
    </NavbarMenuItem>
  );
};

const NextuiHeader = () => {
  const [isOpen, setOpen] = useState(false);
  const { push } = useRouter();

  const onMenuItemClick = (href: string) => {
    push(href);
    setOpen(false);
  };

  return (
    <Navbar
      isBlurred
      isBordered
      classNames={{ wrapper: "px-0 container" }}
      className="px-0 bg-neutral-950/90 text-neutral-200"
      maxWidth="full"
      onMenuOpenChange={setOpen}
      isMenuOpen={isOpen}>
      <NavbarBrand>
        <p className="text-xl font-medium">HeadThunder</p>
      </NavbarBrand>
      <NavbarContent justify="center" className="hidden md:flex">
        {items.map((el, key) => (
          <NavbarItem key={key} isActive>
            <Link href={el.href} aria-current="page">
              {el.children}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end" className="hidden md:flex">
        <Button>Github</Button>
      </NavbarContent>
      <NavbarMenuToggle
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="md:hidden"
      />
      <NavbarMenu className="bg-neutral-600/50 p-0 py-2 container">
        {items.map(({ children, href }, key) => (
          <MenuItem
            onAction={() => onMenuItemClick(href)}
            key={`${children}-${key}`}>
            {children}
          </MenuItem>
        ))}
        <MenuItem onAction={() => onMenuItemClick("#")} key={`github`}>
          Github
        </MenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NextuiHeader;
