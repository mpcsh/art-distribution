import { PrismaClient } from "@prisma/client";
import Head from "next/head";

export async function getServerSideProps() {
  const prisma = new PrismaClient();
  return {
    props: {
      users: await prisma.user.findMany({ include: { household: true } }),
    },
  };
}

export default function AppContainer({ users }) {
  return (
    <>
      <Head>
        <title>Art distribution</title>
      </Head>

      <main>
        <h1>test</h1>
        {users.map(({ id, name, household }) => (
          <p key={id}>
            {id}: {name} lives at {household.address}
          </p>
        ))}
      </main>
    </>
  );
}
