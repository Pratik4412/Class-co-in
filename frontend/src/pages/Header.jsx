import React, { useEffect, useState } from "react";
import logo from "../assets/header-logo.png";
import { navbar_items } from "../data/text";
import { FiMenu, FiX } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();
  const activePath = location.pathname + location.hash;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all shadow-lg duration-300
        ${
          scrolled
            ? "bg-[#8a5b47] shadow-md py-2"
            : "bg-[rgba(0,0,0,0.1)] py-4 "
        }
      `}
    >
      <div className="container mx-auto px-5 md:px-10 lg:px-20 flex items-center justify-between">
        {/* LOGO */}
        <img
          src={logo}
          alt="Logo"
          className={`w-[200px] transition-all duration-300 ${
            scrolled ? "brightness-100" : "brightness-0 invert"
          }`}
        />

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-white">
          {navbar_items.map((item, i) => (
            <HashLink smooth to={item.path} key={i}>
              <li
                className={`
                  relative cursor-pointer font-medium text-sm uppercase tracking-wide
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                  after:bg-white after:transition-all after:duration-300
                  hover:after:w-full
                  ${activePath === item.path ? "after:w-full" : ""}
                `}
              >
                {item.lable}
              </li>
            </HashLink>
          ))}
        </ul>

        {/* MOBILE MENU ICON */}
        <button
          className={`md:hidden text-3xl transition-all duration-300 ${
            scrolled ? "text-white" : "text-white"
          }`}
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      <div
        className={`md:hidden fixed top-[72px] left-0 w-full z-40 bg-white shadow-lg
          transition-all duration-300
          ${
            openMenu
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-6 pointer-events-none"
          }
        `}
      >
        <ul className="flex flex-col gap-2 px-6 py-6">
          {navbar_items.map((item, i) => (
            <HashLink
              smooth
              to={item.path}
              key={i}
              onClick={() => setOpenMenu(false)}
            >
              <li
                className={`
                  py-3 text-base font-medium text-black
                  border-b border-black/10 hover:text-[#8a5b47]
                `}
              >
                {item.lable}
              </li>
            </HashLink>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
