"use client";
import { signOut } from "@/lib/auth-client";
import { HandStop } from "@gravity-ui/icons";
import { Button, Tabs, toast } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";

const SignOutBtn = ({ user }) => {
  console.log(user);
  const router = useRouter();
  const noop = () => {};
  return (
    <div>
      <div className="flex justify-center pt-10 min-h-screen w-full">
        <Tabs className="w-full max-w-md">
          <Tabs.ListContainer>
            <Tabs.List aria-label="Options">
              <Tabs.Tab id="welcome">
                <span>
                  Welcome Home, <strong> {user.name}</strong>
                </span>
                <Tabs.Indicator />
              </Tabs.Tab>
            </Tabs.List>
          </Tabs.ListContainer>
          <Tabs.Panel className="pt-4" id="welcome">
            <div className="flex flex-col justify-center items-center">
              <h1 className="py-5">You Can Peacefully SignOut Now!</h1>
              <Button
                onClick={() => {
                  signOut();
                  router.push("/");
                }}
                onPress={() =>
                  toast.danger("You Just Logged Out", {
                    actionProps: {
                      children: "Tata 👋",
                      onPress: noop,
                      variant: "danger",
                    },
                    description: "Hope You Enjoyed",
                    indicator: <HandStop />,
                  })
                }
              >
                SignOut
              </Button>
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default SignOutBtn;
