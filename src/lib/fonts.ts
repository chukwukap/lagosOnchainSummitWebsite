import {
  Inter,
  Poppins,
  Roboto,
  Montserrat,
  Russo_One,
} from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-russo",
});

export const russo = Russo_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

// Font combinations for different purposes
export const headingFont = russo;
export const bodyFont = inter;
export const accentFont = montserrat;
export const monoFont = roboto;

// Usage example:
// import { headingFont, bodyFont } from '@/lib/fonts'
//
// <div className={`${headingFont.variable} ${bodyFont.variable} font-sans`}>
//   <h1 className="font-heading">Heading</h1>
//   <p className="font-body">Body text</p>
// </div>
