import { auth } from "@/lib/auth";
import { signOut } from "@/lib/auth-client";
import { headers } from "next/headers";
import React from "react";
import SignOutBtn from "../components/SignOutBtn";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log(session);
  const user = session?.user;
  if (!user) {
    return redirect("/");
  }

  return (
    <div>
      <SignOutBtn user={user} />
    </div>
  );
};

export default DashboardPage;
