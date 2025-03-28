"use server";

import { auth } from "@/auth";
import Link from "next/link";
import { SignInButton } from "@/components/sign-in-button";
import { SignOutButton } from "@/components/sign-out-button";

export default async function Home() {
  const session = await auth();
  console.log(session);

  if (session?.user) {
    return (
      <div>
        <Link href="/user-info"> User Info </Link>
        <SignOutButton />
      </div>
    );
  }

  return (
    <div>
      {" "}
      <p> You Are Not Signed In</p> <SignInButton />
    </div>
  );
}