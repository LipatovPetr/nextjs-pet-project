import { Inter } from "next/font/google";
import NavBar from "@/components/navbar/NavBar";

import "./globals.css";
import Footer from "@/components/footer/Footer";

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
