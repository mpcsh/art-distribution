import { type Item } from "@prisma/client";
import Image from "next/image";

import { S3_PREFIX } from "../lib/constants";
import styles from "./ItemCard.module.css";

export default function ItemCard({
	id,
	name,
	type,
	imageFilename,
	description,
	isFramed,
	length,
	width,
	height,
}: Item) {
	return (
		<div className={styles.itemCard}>
			<div className={styles.imageContainer}>
				<Image
					alt={description ?? ""}
					width={320}
					height={320}
					src={`${S3_PREFIX}/${imageFilename}`}
				/>
			</div>
			<div className={styles.details}>
				<p className={styles.title}>{name}</p>
				{description ?? <p className={styles.description}>{description}</p>}
			</div>
		</div>
	);
}
