"use client";
// import useColorMode from "@hooks/useColorMode";

import NavBar from "./NavBar";

function NavBarWrapper() {
  //   const [colorMode, setColorMode] = useColorMode();
  return (
    <NavBar
      changeMood={() => {}}
      //   changeMood={() => setColorMode(colorMode === "light" ? "dark" : "light")}
    />
  );
}

export default NavBarWrapper;
