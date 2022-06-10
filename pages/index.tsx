import { Item, PrismaClient, User } from "@prisma/client";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useState } from "react";

import { Container } from "@mui/material";

import ItemList from "../components/ItemList";
import UserSelector from "../components/UserSelector";

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

	return (
		<>
			<Head>
				<title>Art distribution</title>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>

			<main>
				<Container>
					{!user && <UserSelector users={users} setUser={setUser} />}

					<ItemList items={items} />
				</Container>
			</main>
		</>
	);
}
