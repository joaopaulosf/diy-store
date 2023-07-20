import { IuseNav } from "models";
import { useState } from "react";
import { PiListThin as Menu, PiXThin as Close } from "react-icons/pi";

export const useNav = (): IuseNav => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuIcon = isMenuOpen ? (
    <Close className="nav__icon" onClick={toggleMenu} />
  ) : (
    <Menu className="nav__icon" onClick={toggleMenu} />
  );

  const dropdownMenu = isMenuOpen && "nav__links--open";

  return { closeMenu, menuIcon, dropdownMenu };
};
