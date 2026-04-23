import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import SignOutBtn from "../components/SignOutBtn";

const Dashboard = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  const isUserAvaiable = user;

  return (
    <div>
      <h1>This is Dashboard</h1>
      <SignOutBtn isUserAvaiable={isUserAvaiable} />
    </div>
  );
};

export default Dashboard;
