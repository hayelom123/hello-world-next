import React from "react";
interface IProps {
  children: React.ReactNode;
}
function layout({ children }: IProps) {
  return (
    <div>
      <h1>the layout</h1>
      {children}
    </div>
  );
}

export default layout;
