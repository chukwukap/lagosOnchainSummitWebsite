import React from "react";
import Link from "next/link";
import Logo from "@/components/ui/logo";

interface BaseHeaderProps {
  children?: React.ReactNode;
  extras?: React.ReactNode;
}

const BaseHeader: React.FC<BaseHeaderProps> = ({ children, extras }) => {
  return (
    <header className="bg-transparent shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center bg-transparent backdrop-blur-md">
        <Link href="/">
          <Logo />
        </Link>
        <nav>{children}</nav>
        <div>{extras}</div>
      </div>
    </header>
  );
};

export default BaseHeader;
