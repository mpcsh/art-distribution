import { PrismaClient, type Item, type User } from "@prisma/client";
import Head from "next/head";

import ItemCard from "../components/ItemCard";
import styles from "./index.module.css";

export async function getServerSideProps() {
	const prisma = new PrismaClient();
	const items = await prisma.item.findMany({});
	const users = await prisma.user.findMany({});
	return { props: { items, users } };
}

type AppContainerProps = {
	items: Item[];
	users: User[];
};

export default function AppContainer({ items, users }: AppContainerProps) {
	return (
		<>
			<Head>
				<title>Art distribution</title>
			</Head>

			<main>
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
