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
      <h1>This is Dashboard</h1>
      <SignOutBtn />
    </div>
  );
};

export default DashboardPage;
