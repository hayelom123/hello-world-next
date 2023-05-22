import "./globals.css";
import NavBar from "./components/NavBar";
import MyProfilePic from "./components/MyProfilePic";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hayelom's Blog",
  description: "created by Hayelom kiros",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <NavBar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
