import "@styles/globals.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover & share promptopia",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradien" />
        </div>
        <main className="app"> {children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
