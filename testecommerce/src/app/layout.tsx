import NavBar from "./components/NavBar";
import NavBar2 from "./components/NavBar2";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Commerce",
  description: "market place",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <NavBar />
        {/* <NavBar2 /> */}
        {children}
      </body>
    </html>
  );
}
