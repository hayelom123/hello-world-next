import Image from "next/image";
import Link from "next/link";
export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <h1>Home page</h1>
      <Link href={"/users"}>Users</Link>
    </main>
  );
}
