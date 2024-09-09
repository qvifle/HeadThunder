import React from "react";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="py-3 bg-neutral-950">
      <div className="container">
        <div className="flex items-center justify-between w-full">
          <span className="text-xl font-semibold text-neutral-100">
            HeadTunder
          </span>
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
