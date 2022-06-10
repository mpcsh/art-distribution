import { Item } from "@prisma/client";
import Image from "next/image";

import { S3_PREFIX } from "../lib/constants";

export default function ItemCard({
	id,
	name,
	type,
	imageName,
	description,
	isFramed,
	length,
	width,
	height,
}: Item) {
	return (
		<div>
			<div>
				<Image
					alt={description ?? ""}
					width={320}
					height={320}
					src={`${S3_PREFIX}/${imageName}.thumb.webp`}
				/>
			</div>
			<div>
				<p>{name}</p>
				{description ?? <p>{description}</p>}
			</div>
		</div>
	);
}
