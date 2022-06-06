import Image from "next/image";
import { useEffect, useState } from "react";

import { S3_PREFIX } from "../util/images";
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
}) {
  return (
    <div className={styles.itemCard}>
      <div className={styles.imageContainer}>
        <Image
          alt={description}
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
