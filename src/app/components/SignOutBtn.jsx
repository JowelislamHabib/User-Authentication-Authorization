"use client";
import { signOut } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";

const SignOutBtn = ({ isUserAvaiable }) => {
  const router = useRouter();
  console.log(isUserAvaiable);

  return (
    <div>
      <Button
        onClick={() => {
          signOut();
          if (isUserAvaiable == null) router.push("/");
        }}
      >
        SignOut
      </Button>
    </div>
  );
};

export default SignOutBtn;
