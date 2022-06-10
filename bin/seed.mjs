import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

await prisma.household.deleteMany({});
await prisma.$queryRaw`ALTER TABLE Household AUTO_INCREMENT = 1`;
await prisma.user.deleteMany({});
await prisma.$queryRaw`ALTER TABLE User AUTO_INCREMENT = 1`;
await prisma.item.deleteMany({});
await prisma.$queryRaw`ALTER TABLE Item AUTO_INCREMENT = 1`;

// households
const elmSt = await prisma.household.create({
	data: {
		address: "123 Elm St, Olympia, WA 98765",
		starLimit: 3,
	},
});

const birchAve = await prisma.household.create({
	data: {
		address: "456 Birch Ave, Sacramento, CA 91234",
	},
});

// users
const johnDoe = await prisma.user.create({
	data: {
		name: "John Doe",
		household: { connect: { id: elmSt.id } },
	},
});

const janeFawn = await prisma.user.create({
	data: {
		name: "Jane Fawn",
		household: { connect: { id: elmSt.id } },
	},
});

const jennyDoeFawn = await prisma.user.create({
	data: {
		name: "Jennie Doe-Fawn",
		household: { connect: { id: birchAve.id } },
	},
});

// items
const boldBrash = await prisma.item.create({
	data: {
		name: "Bold & Brash",
		type: "Painting",
		imageName: "boldbrash",
		description: "The artist in the nude",
		isFramed: true,
		length: 24,
		width: 24,
		height: null,
	},
});

const leapfrog = await prisma.item.create({
	data: {
		name: "Sponge and Squid playing leapfrog",
		type: "Tchotchke",
		imageName: "leapfrog",
		description: "Reclaimed paper",
		isFramed: null,
		length: 6,
		width: 6,
		height: 6,
	},
});

const graph = await prisma.item.create({
	data: {
		name: "Look at this graph",
		type: "Photograph",
		imageName: "lookatthisgraph",
		description: "Bar chart, framed, originally held by Chad Kroeger",
		isFramed: true,
		length: 4,
		width: 6,
		height: null,
	},
});
