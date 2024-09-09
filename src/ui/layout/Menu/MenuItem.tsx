import { cn } from "@/utils/helpers/cn";
import Link from "next/link";
import React, { FC, HTMLAttributes } from "react";

interface MenuItemProps extends HTMLAttributes<HTMLLIElement> {
  href?: string;
}

const MenuItem: FC<MenuItemProps> = ({
  children,
  href,
  className,
  ...rest
}) => {
  return (
    <li
      className={cn(
        "w-max text-neutral-100 active:text-neutral-300 duration-100",
        className
      )}
      {...rest}>
      <Link href={href ?? "#"}>{children}</Link>
    </li>
  );
};

export default MenuItem;
