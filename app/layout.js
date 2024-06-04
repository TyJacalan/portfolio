import { Libre_Franklin } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const libreFranklin = Libre_Franklin({ subsets: ["latin"] });

export const metadata = {
  title: "Ty Jacalan | Developer",
  description: "Ruby on Rails Programmer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${libreFranklin.className} min-h-screen max-w-screen overflow-x-hidden`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
