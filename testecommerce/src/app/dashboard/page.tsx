import { AuthRequiredError } from "@lib/Exceptions";
import React from "react";

type Props = {};
const wait = (ms: number) =>
  new Promise((resolve, reject) => setTimeout(resolve, ms));
const session = null;
const page = async (props: Props) => {
  await wait(1000);
  //   if (!session) throw new AuthRequiredError();
  return <div>dash board</div>;
};

export default page;
