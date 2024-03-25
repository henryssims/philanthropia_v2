import { getServerSession } from "next-auth";
import authOptions from "./api/auth/[...nextauth]/options";
import { User } from "./user";

export default async function Page() {
  // get session on server
  const session = await getServerSession(authOptions);

  return (
    <>
      <h1>Home Page</h1>
      <h2>server session</h2>
      <pre>{JSON.stringify(session)}</pre>
      <h2>client session</h2>
      <User />
    </>
  );
}
