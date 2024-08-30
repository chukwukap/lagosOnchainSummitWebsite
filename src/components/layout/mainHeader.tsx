import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

import Logo from "@/components/ui/logo";
import Gutter from "../common/gutter";

interface BaseHeaderProps {
  children?: React.ReactNode;
  extras?: React.ReactNode;
}

const MainHeader: React.FC<BaseHeaderProps> = () => {
  return (
    <header className="bg-transparent shadow-sm ">
      <Gutter className=" flex justify-between  gap-2 md:gap-0 items-center bg-transparent backdrop-blur-md ">
        <Link href="/">
          <Logo />
        </Link>
        <nav>
          {" "}
          <ul className="flex items-center justify-between gap-2 md:gap-6 text-lagos-white">
            <li>
              <Link href={"/sponsors-deck"}>Sponsor&apos;s Deck</Link>
            </li>{" "}
            <li>
              <Link href={"/sponsors"}>Sponsor&apos;s</Link>
            </li>{" "}
            <li>
              <Link href={"/speakers"}>Speakers</Link>
            </li>{" "}
            <li>
              <Link href={"/contacts"}>Contacts</Link>
            </li>{" "}
          </ul>
        </nav>
        <div className="flex gap-2 border-l-2 border-lagos-white md:gap-6 items-center justify-between  pl-4">
          <div className="w-5 h-5  relative">
            <Image src={"/assets/icons/svg/phone.svg"} fill alt="phone icon" />
          </div>
          <div className="text-sm">Support +234 8101314508</div>
          <Button className="bg-gradient-to-b from-[#84FFE1] to-[#04E3AC]  text-lagos-black">
            Register now
          </Button>
        </div>
      </Gutter>
    </header>
  );
};

export default MainHeader;
