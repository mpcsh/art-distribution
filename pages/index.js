import Head from "next/head";
import { PrismaClient } from "@prisma/client";

import ItemCard from "../components/ItemCard";
import styles from "./index.module.css";

export async function getServerSideProps() {
  const prisma = new PrismaClient();
  const users = await prisma.user.findMany({ include: { household: true } });
  const items = await prisma.item.findMany({});
  return { props: { users, items } };
}

export default function AppContainer({ users, items }) {
  return (
    <>
      <Head>
        <title>Art distribution</title>
      </Head>

      <main>
        <h1>users</h1>
        {users.map(({ id, name, household }) => (
          <p key={id}>
            {id}: {name} lives at {household.address}
          </p>
        ))}

        <h1>items</h1>
        <div id={styles.itemList}>
          {items.map((item, i) => (
            <ItemCard key={i} {...item} />
          ))}
        </div>
      </main>
    </>
  );
}
