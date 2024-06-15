import { Inter } from "next/font/google";

import "./globals.css";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Creactive Thoughts Agency",
    template: "%s | Creactive Thoughts Agency",
  },
  description: "Next.js 14 pet project, 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
