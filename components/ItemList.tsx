import { Item } from "@prisma/client";
import Image from "next/image";
import { useViewport } from "react-viewport-hooks";

import { FavoriteBorder } from "@mui/icons-material";
import { IconButton, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

import { S3_PREFIX } from "../lib/constants";

type ItemListProps = {
	items: Item[];
};

export default function ItemList({ items }: ItemListProps) {
	const { vw } = useViewport();
	return (
		<ImageList cols={vw && Math.floor(Math.sqrt(vw) / 11)}>
			{items.map((item) => (
				<ImageListItem key={item.id}>
					<Image
						alt={item.description ?? item.name}
						layout="responsive"
						width={640}
						height={640}
						src={`${S3_PREFIX}/${item.imageName}.thumb.webp`}
					/>
					<ImageListItemBar
						position="below"
						title={item.name}
						subtitle={item.description}
						actionIcon={
							<IconButton aria-label="favorite">
								<FavoriteBorder color="action" />
							</IconButton>
						}
					/>
				</ImageListItem>
			))}
		</ImageList>
	);
}
