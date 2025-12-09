import { Bitcount_Prop_Single, Libre_Franklin, Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const libreFranklin = Libre_Franklin({
	subsets: ["latin"],
	variable: '--font-libre-franklin'
});

const roboto = Roboto({ 
	subsets: ["latin"],
	variable: '--font-roboto'
});

const bitcountPropSingle = Bitcount_Prop_Single({
	subsets: ["latin"], 
	variable: '--font-bitcount'
});

export const metadata = {
  title: "Ty Jacalan | Developer",
  description: "Ruby on Rails Programmer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bitcountPropSingle.className} ${libreFranklin.className} ${roboto.className} h-full max-w-screen overflow-x-hidden text-tertiary bg-linear-to-b from-primary to-accent`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
