import { Inter } from "next/font/google";

import "./globals.css";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WikiRocket!",
  description: "Generated  WikiRocket Documentation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-800`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
