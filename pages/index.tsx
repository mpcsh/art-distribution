import { type Item, PrismaClient, type User } from "@prisma/client";
import { type GetServerSideProps } from "next";
import Head from "next/head";
import { useState } from "react";

import ItemCard from "../components/ItemCard";
import UserSelector from "../components/UserSelector";
import styles from "./index.module.css";

export const getServerSideProps: GetServerSideProps = async () => {
	const prisma = new PrismaClient();
	const items = await prisma.item.findMany({});
	const users = await prisma.user.findMany({});
	return { props: { items, users } };
};

type AppContainerProps = {
	items: Item[];
	users: User[];
};

export default function AppContainer({ items, users }: AppContainerProps) {
	const [user, setUser] = useState<User | null>(null);
	console.log(user);

	return (
		<>
			<Head>
				<title>Art distribution</title>
			</Head>

			<main id={styles.appContainer}>
				{!user && <UserSelector users={users} setUser={setUser} />}

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
