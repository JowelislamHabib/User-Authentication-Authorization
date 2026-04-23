import Image from "next/image";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { Tabs } from "@heroui/react";
import Dashboard from "./components/Dashboard";

export default function Home() {
  return (
    <>
      <div className="flex justify-center pt-10 min-h-screen w-full">
        <Tabs className="w-full max-w-md">
          <Tabs.ListContainer>
            <Tabs.List aria-label="Options">
              <Tabs.Tab id="signIn">
                SignIn
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="signUp">
                SignUp
                <Tabs.Indicator />
              </Tabs.Tab>
            </Tabs.List>
          </Tabs.ListContainer>
          <Tabs.Panel className="pt-4" id="signIn">
            <Signin />
          </Tabs.Panel>
          <Tabs.Panel className="pt-4" id="signUp">
            <Signup />
          </Tabs.Panel>
        </Tabs>
      </div>
    </>
  );
}
