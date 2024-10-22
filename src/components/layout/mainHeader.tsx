"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import Gutter from "@/components/common/gutter";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/speakers", label: "Speakers" },
  { href: "/agenda", label: "Agenda" },
  { href: "#", label: "Sponsors Deck", isPDF: true },
];

const MainHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerHeight = headerRef.current?.offsetHeight || 0;
      setIsScrolled(scrollPosition > headerHeight);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSponsorsDeckClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("/assets/documents/sponsors_deck.pdf", "_blank");
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 ${
        isScrolled
          ? "bg-lagos-black bg-opacity-80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <Gutter className="flex justify-between items-center py-4">
        <Link href="/">
          <Logo />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex items-center justify-between gap-6 text-lagos-white">
            {navItems.map((item) => (
              <li key={item.href}>
                {item.isPDF ? (
                  <a
                    href="#"
                    onClick={handleSponsorsDeckClick}
                    className="hover:text-lagos-cyan transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-lagos-cyan transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:flex gap-6 items-center border-l-2 border-lagos-white pl-4">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/icons/svg/phone.svg"
              width={20}
              height={20}
              alt="phone icon"
            />
            <span className="text-sm text-lagos-white">
              Support +234 907 250 9898
            </span>
          </div>
          <Link href={"/register"}>
            <Button className="bg-gradient-to-b from-[#84FFE1] to-[#04E3AC] text-lagos-black hover:opacity-90 transition-opacity">
              Register now
            </Button>
          </Link>
        </div>
        <button className="md:hidden text-lagos-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Gutter>
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-lagos-black bg-opacity-95 backdrop-blur-md"
        >
          <Gutter>
            <nav className="py-4">
              <ul className="flex flex-col gap-4 text-lagos-white">
                {navItems.map((item) => (
                  <li key={item.href}>
                    {item.isPDF ? (
                      <a
                        href="#"
                        onClick={(e) => {
                          handleSponsorsDeckClick(e);
                          toggleMenu();
                        }}
                        className="block py-2 hover:text-lagos-cyan transition-colors"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="block py-2 hover:text-lagos-cyan transition-colors"
                        onClick={toggleMenu}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex flex-col gap-4 py-4 border-t border-lagos-white/20">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/icons/svg/phone.svg"
                  width={20}
                  height={20}
                  alt="phone icon"
                />
                <span className="text-sm text-lagos-white">
                  Support +234 8101314508
                </span>
              </div>
              <Link href={"/register"}>
                <Button className="bg-gradient-to-b from-[#84FFE1] to-[#04E3AC] text-lagos-black hover:opacity-90 transition-opacity">
                  Register now
                </Button>
              </Link>
            </div>
          </Gutter>
        </div>
      )}
    </header>
  );
};

export default MainHeader;
