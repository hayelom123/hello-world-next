import React from "react";
import styles from "./styles.module.css";
function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>About Navbar</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}

export default AboutLayout;
