import Logo from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Gutter from "../common/gutter";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/lagos-onchain-summit/",
    icon: "/assets/icons/svg/whatsapp.svg",
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
    href: "https://www.instagram.com/lagosonchain_/profilecard/?igsh=ODR6eHg3NHZ6bGVy",
    icon: "/assets/icons/svg/instagram.svg",
  },
];

const quickLinks = [
  { name: "About Lagos Onchain Summit", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact Us", href: "/contact" },
  { name: "Support", href: "/support" },
];

const developers = [
  {
    name: "Chukwuka Uba",
    role: "Lead Developer",
    github: "https://github.com/chukwukap",
    website: "https://chukwuka.xyz",
    twitter: "https://x.com/chukwukadefi", // Replace with actual Twitter link
  },
  // {
  //   name: "Web3Bridge",
  //   role: "Development Team",
  //   website: "https://www.web3bridge.com/",
  //   twitter: "https://twitter.com/Web3Bridge", // Replace with actual Twitter link
  // },
  // Add more developers as needed
];

export default function MainFooter() {
  return (
    <footer className="bg-lagos-black text-white py-16">
      <Gutter>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="text-sm text-white/80">
              Be a part of the LAGOS ONCHAIN SUMMIT. Join us for an immersive
              experience in blockchain technology.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-8 h-8 relative transition-transform hover:scale-110"
                >
                  <Image src={link.icon} alt={link.name} fill />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-sm text-white/80 mb-4">
              Stay up to date with the latest on Lagos Onchain Summit
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-lagos-cyan"
              />
              <Button className="w-full sm:w-auto">Sign Up</Button>
            </form>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <div className="space-y-4">
              <Link href="/register" aria-label="Register now">
                <Button className="w-full bg-lagos-cyan text-lagos-black hover:bg-lagos-cyan/90">
                  Register now
                </Button>
              </Link>
              <Link href="/sponsor" aria-label="Be a Sponsor">
                <Button
                  disabled
                  variant="outline"
                  className="w-full border-lagos-cyan text-lagos-cyan hover:bg-lagos-cyan hover:text-lagos-black"
                >
                  Be a Sponsor
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/80">
              &copy; 2024 Lagos Onchain Summit. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <Link
                href="/privacy-policy"
                className="text-white/80 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-white/80 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="text-sm text-white/60">
            <p>Built with ❤️ by:</p>
            <ul className="flex flex-wrap gap-4 mt-2">
              {developers.map((dev) => (
                <li key={dev.name} className="flex items-center gap-2">
                  <span>{dev.name}</span>
                  {dev.github && (
                    <a
                      href={dev.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lagos-cyan hover:text-lagos-cyan-light transition-colors"
                    >
                      <Image
                        src="/assets/icons/svg/github.svg"
                        alt="GitHub"
                        width={16}
                        height={16}
                      />
                    </a>
                  )}
                  {dev.twitter && (
                    <a
                      href={dev.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lagos-cyan hover:text-lagos-cyan-light transition-colors"
                    >
                      <Image
                        src="/assets/icons/svg/twitter.svg"
                        alt="Twitter"
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
                      className="text-lagos-cyan hover:text-lagos-cyan-light transition-colors"
                    >
                      <Image
                        src="/assets/icons/svg/website.svg"
                        alt="Website"
                        width={16}
                        height={16}
                      />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Gutter>
    </footer>
  );
}
