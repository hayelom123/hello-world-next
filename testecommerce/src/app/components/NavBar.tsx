import Link from "next/link";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import useColorMode from "@hooks/useColorMode";
type props = {
  changeMood: () => void;
};
function NavBar({ changeMood }: props) {
  // const { systemTheme, theme, setTheme } = useTheme();
  // const renderThemeChanger = () => {
  //   const currentTheme = theme === "system" ? systemTheme : theme;
  // };
  const [colorMode, setColorMode] = useColorMode();
  return (
    <div className="sticky top-0 p-2 bg-white text-black  shadow-sm flex justify-around flex-wrap">
      <div className="logo">
        <h1 className="p-2">LOGO</h1>
      </div>
      <div>
        <ul className="flex  ">
          <li className="p-2">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="p-2">
            <Link href={"/products"}>Products</Link>
          </li>
          <li className="p-2">
            <Link href={"/product/post"}>Post</Link>
          </li>
        </ul>
      </div>
      <div className="hidden sm:block ">
        <ul className="flex">
          <li className="p-2">
            <Link href={"/login"}>Login</Link>
          </li>
          <li className="p-2">
            <Link href={"/signup"}>Sign Up</Link>
          </li>
          <li className="p-2 ml-auto cursor-pointer" onClick={changeMood}>
            <MoonIcon className="block h-6 w-6" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
