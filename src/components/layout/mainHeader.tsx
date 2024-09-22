"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import Logo from "@/components/ui/logo";
import Gutter from "../common/gutter";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

interface BaseHeaderProps {
  children?: React.ReactNode;
  extras?: React.ReactNode;
}

const MainHeader: React.FC<BaseHeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: "/sponsors-deck", label: "Sponsor's Deck" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/speakers", label: "Speakers" },
    { href: "/contacts", label: "Contacts" },
  ];

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

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
                  <Link
                    href={item.href}
                    className="hover:text-lagos-cyan transition-colors"
                  >
                    {item.label}
                  </Link>
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
                Support +234 8101314508
              </span>
            </div>
            <Button className="bg-gradient-to-b from-[#84FFE1] to-[#04E3AC] text-lagos-black hover:opacity-90 transition-opacity">
              Register now
            </Button>
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
                      <Link
                        href={item.href}
                        className="block py-2 hover:text-lagos-cyan transition-colors"
                        onClick={toggleMenu}
                      >
                        {item.label}
                      </Link>
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
                <Button className="bg-gradient-to-b from-[#84FFE1] to-[#04E3AC] text-lagos-black hover:opacity-90 transition-opacity">
                  Register now
                </Button>
              </div>
            </Gutter>
          </div>
        )}
      </header>
      <div style={{ height: headerRef.current?.offsetHeight }} />
    </>
  );
};

export default MainHeader;
