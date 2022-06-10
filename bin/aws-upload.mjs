import path from "path";
import process from "process";

import { PutObjectCommand, S3Client } from "@aws-sdk/client-S3";
import sharp from "sharp";

const imagePath = process.argv[2];
const imageName = path.basename(imagePath).split(".")[0];

const fullSize = await sharp(imagePath)
	.resize(2048, 2048, { fit: "outside" })
	.toFormat("webp")
	.toBuffer();
const thumbnail = await sharp(imagePath)
	.resize(512, 512, { fit: "cover" })
	.toFormat("webp")
	.toBuffer();

const s3 = new S3Client({ region: "us-east-1" });
const bucket = { Bucket: "art-distribution" };
await s3.send(new PutObjectCommand({ ...bucket, Key: `${imageName}.webp`, Body: fullSize }));
await s3.send(new PutObjectCommand({ ...bucket, Key: `${imageName}.thumb.webp`, Body: thumbnail }));
