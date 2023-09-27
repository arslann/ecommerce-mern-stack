import "./globals.css";

import Navbar from "../components/Navbar";
import { Providers } from "./store/provider";
import Footer from "@/components/Footer";

export const metadata = {
  title: "LuxeLair E-Commerce",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="overflow-x-hidden min-h-full ">
        <Providers>
          <div className="flex flex-col justify-between min-h-screen">
            <Navbar />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
