import Logo from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Gutter from "../common/gutter";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/lagos-onchain-summit/",
    icon: "/assets/icons/svg/linkedin.svg",
  },
  {
    name: "Twitter",
    href: "https://x.com/LagosOnchain",
    icon: "/assets/icons/svg/twitter.svg",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/LagosOnchainSummit",
    icon: "/assets/icons/svg/facebook.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/lagosonchain_/",
    icon: "/assets/icons/svg/instagram.svg",
  },
];

const quickLinks = [
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
  { name: "Support", href: "/support" },
];

const developers = [
  {
    name: "Chukwuka Uba",
    role: "Lead Developer",
    github: "https://github.com/chukwukap",
    website: "https://chukwuka.xyz",
    twitter: "https://x.com/chukwukadefi",
  },
];

const MainFooter = () => {
  return (
    <footer className="bg-[hsl(var(--lagos-black))] border-t border-[hsl(var(--lagos-cyan)_/_0.1)]">
      <Gutter className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Logo />
            <p className="text-[hsl(var(--lagos-white)_/_0.8)] text-sm leading-relaxed">
              Join us for an immersive experience in blockchain technology at
              the LAGOS ONCHAIN SUMMIT.
            </p>
            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label={link.name}
                >
                  <div
                    className="w-8 h-8 rounded-full bg-[hsl(var(--lagos-cyan)_/_0.1)] flex items-center justify-center 
                    group-hover:bg-[hsl(var(--lagos-cyan)_/_0.2)] transition-all duration-300"
                  >
                    <Image src={link.icon} alt="" width={16} height={16} />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-[hsl(var(--lagos-white))] font-medium">
              Quick Links
            </h3>
            <nav>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[hsl(var(--lagos-white)_/_0.7)] hover:text-[hsl(var(--lagos-cyan))] 
                        transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-[hsl(var(--lagos-white))] font-medium">
              Stay Updated
            </h3>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-[hsl(var(--lagos-white)_/_0.05)] rounded-lg
                  border border-[hsl(var(--lagos-cyan)_/_0.1)] focus:border-[hsl(var(--lagos-cyan))]
                  text-[hsl(var(--lagos-white))] placeholder:text-[hsl(var(--lagos-white)_/_0.5)]
                  outline-none transition-all duration-200"
              />
              <Button
                className="w-full bg-[hsl(var(--lagos-cyan))] text-[hsl(var(--lagos-black))]
                  hover:bg-[hsl(var(--lagos-cyan)_/_0.9)] transition-colors duration-200"
              >
                Subscribe
              </Button>
            </form>
          </div>

          {/* CTA Section */}
          <div className="space-y-6">
            <h3 className="text-[hsl(var(--lagos-white))] font-medium">
              Get Involved
            </h3>
            <div className="space-y-3">
              <Link href="/register">
                <Button
                  className="w-full bg-[hsl(var(--lagos-cyan))] text-[hsl(var(--lagos-black))]
                    hover:bg-[hsl(var(--lagos-cyan)_/_0.9)] transition-colors duration-200"
                >
                  Register Now
                </Button>
              </Link>
              <Link href="/sponsor">
                <Button
                  variant="outline"
                  className="w-full border-[hsl(var(--lagos-cyan))] text-[hsl(var(--lagos-cyan))]
                    hover:bg-[hsl(var(--lagos-cyan)_/_0.1)] transition-colors duration-200"
                >
                  Become a Sponsor
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-[hsl(var(--lagos-white)_/_0.1)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[hsl(var(--lagos-white)_/_0.7)] text-sm">
              © {new Date().getFullYear()} Lagos Onchain Summit. All rights
              reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-[hsl(var(--lagos-white)_/_0.7)] hover:text-[hsl(var(--lagos-cyan))]
                  transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-[hsl(var(--lagos-white)_/_0.7)] hover:text-[hsl(var(--lagos-cyan))]
                  transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Developer Credits */}
          <div className="mt-8 text-sm text-[hsl(var(--lagos-white)_/_0.5)]">
            <p>Developed by:</p>
            <div className="mt-2 flex flex-wrap gap-4">
              {developers.map((dev) => (
                <div key={dev.name} className="flex items-center gap-3">
                  <span>{dev.name}</span>
                  <div className="flex gap-2">
                    {dev.github && (
                      <a
                        href={dev.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-70 hover:opacity-100 transition-opacity"
                      >
                        <Image
                          src="/assets/icons/svg/github.svg"
                          alt=""
                          width={16}
                          height={16}
                        />
                      </a>
                    )}
                    {dev.website && (
                      <a
                        href={dev.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-70 hover:opacity-100 transition-opacity"
                      >
                        <Image
                          src="/assets/icons/svg/website.svg"
                          alt=""
                          width={16}
                          height={16}
                        />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Gutter>
    </footer>
  );
};

export default MainFooter;
