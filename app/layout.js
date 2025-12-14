import "./globals.css";
import { Bitcount_Prop_Single, Libre_Franklin, Roboto, Russo_One } from "next/font/google";

import { Footer } from "@/components";

const libreFranklin = Libre_Franklin({
	subsets: ["latin"],
  display: "swap",
  variable: "--font-libre-franklin"
});

const roboto = Roboto({ 
	subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto"
});

const bitcount = Bitcount_Prop_Single({ 
	subsets: ["latin"],
  display: "swap",
  variable: "--font-bitcount"
});

const russo = Russo_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-russo"
});



export const metadata = {
  title: "Ty Jacalan | Developer",
  description: "Ruby on Rails Programmer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${libreFranklin.variable} ${bitcount.variable} ${roboto.variable} h-full max-w-screen overflow-x-hidden text-tertiary bg-linear-to-b from-primary to-accent`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
