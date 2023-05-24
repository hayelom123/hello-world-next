import React from "react";
import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "users",
  description: "",
};
async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;
  const content = (
    <section>
      <h2>
        <Link href={"/"}>Back to Home</Link>
      </h2>
      <br />
      {users.map((user) => (
        <>
          <p key={user.id}>
            <Link href={`/users/${user.id}`}> {user.name}</Link>
          </p>
          <br />
        </>
      ))}
    </section>
  );
  return content;
}

export default UsersPage;
