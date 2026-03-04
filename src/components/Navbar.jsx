/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/static-components */
import { ArrowRight } from "lucide-react";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./resizable-navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export function MainNavbar() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "My Journey", link: "#my-journey" },
    { name: "Services", link: "#services" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#my-projects" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const CustomNavItems = ({ items }) => {
    return (
      <div className="absolute inset-0 hidden items-center justify-center space-x-4 text-sm font-medium lg:flex">
        {items.map((item, idx) => (
          <button
            key={idx}
            onClick={() => scrollToSection(item.link.replace("#", ""))}
            className="relative cursor-pointer px-4 py-2 text-white transition hover:text-secondary"
          >
            {item.name}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div
      className={`fixed z-99 w-full py-2 flex justify-center items-center transition `}
    >
      <Navbar>
        {/* Desktop */}
        <NavBody>
          <NavbarLogo />

          <CustomNavItems items={navItems} />

          <Link
            target="blank"
            to={"https://www.linkedin.com/in/asibhasan/?skipRedirect=true"}
            className="px-5 py-2 gap-1.5 cursor-pointer lg:flex justify-between items-center z-99 rounded-full bg-primary text-black font-semibold hidden hover:bg-secondary hover:text-white transition-all duration-300"
          >
            <ArrowRight className=" -rotate-45" /> LinkedIn
          </Link>
        </NavBody>

        {/* Mobile */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />

            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            className="mt-4"
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  scrollToSection(item.link.replace("#", ""));
                  setIsMobileMenuOpen(false);
                }}
                className=" text-2xl flex justify-center gap-2  items-center py-2 cursor-pointer text-primary hover:text-primary"
              >
                <ArrowRight /> {item.name}
              </button>
            ))}

            <Link
              to={"https://www.linkedin.com/in/asibhasan/?skipRedirect=true"}
              className="w-full py-2 text-center bg-primary rounded-full hover:bg-primary  transition-all duration-300  text-secondary font-semibold mt-4"
            >
              Linkedin
            </Link>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
