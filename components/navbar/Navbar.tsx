import React from "react";
import Navlink from "./Navlink";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/projects", key: "projects", label: "Projects" },
  { href: "/experience", key: "experience", label: "Experience" },
  { href: "/contact", key: "contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <header>
      <div>
        <ul className="hidden gap-16 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Navlink
                href={link.href}
                className={`text-base font-semibold text-grey-50 flexCenter cursor-pointer border-y-2 border-transparent hover:border-b-yellow-600/70 transition-all duration-300 ease-in-out`}
                activeClasses="border-b-yellow-500/70"
                label={link.label}
              />
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
