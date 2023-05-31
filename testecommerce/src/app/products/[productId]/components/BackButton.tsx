"use client";
import { useRouter } from "next/navigation";
function BackButton() {
  const router = useRouter();
  return <button onClick={(e) => router.back()}>back</button>;
}

export default BackButton;
