import { PutObjectCommand, S3Client } from "@aws-sdk/client-S3";
import process from "process";
import sharp from "sharp";

const imageFilename = process.argv[2];
const imageName = imageFilename.split(".")[0];

const fullSize = await sharp(imageFilename)
	.resize(2048, 2048, { fit: "outside" })
	.toFormat("webp")
	.toBuffer();
const thumbnail = await sharp(imageFilename)
	.resize(512, 512, { fit: "cover" })
	.toFormat("webp")
	.toBuffer();

const s3 = new S3Client({ region: "us-east-1" });
const bucket = { Bucket: "art-distribution" };
await s3.send(new PutObjectCommand({ ...bucket, Key: `${imageName}.webp`, Body: fullSize }));
await s3.send(new PutObjectCommand({ ...bucket, Key: `${imageName}.thumb.webp`, Body: thumbnail }));
