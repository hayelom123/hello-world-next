import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import UserPosts from "./components/userPosts";
import getAllUsers from "@/lib/getAllUsers";

type Params = {
  params: {
    userId: string;
  };
};
export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user = await userData;
  if (!user.name) return { title: "User not found" };
  return {
    title: user.name,
    description: `this is the page for user ${user.name}`,
  };
}

async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostData: Promise<Post[]> = getUserPosts(userId);
  const user = await userData; //fetching sequential
  //   const [user, userPosts] = await Promise.all([userData, userPostData]);//parallel fetching
  if (!user.name) notFound();
  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        {/* @ts-expect-error Async Server Component */}
        <UserPosts promise={userPostData} />
      </Suspense>
    </>
  );
}

export default UserPage;
export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;
  return users.map((user) => ({ userId: user.id.toString() }));
}
