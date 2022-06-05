import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

await prisma.Household.deleteMany({});
await prisma.$queryRaw`ALTER TABLE Household AUTO_INCREMENT = 1`;
await prisma.User.deleteMany({});
await prisma.$queryRaw`ALTER TABLE User AUTO_INCREMENT = 1`;

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
    description: "The artist in the nude",
    type: "Painting",
    isFramed: true,
    length: 24,
    width: 24,
    height: null,
    imageFilename: "boldbrash.jpg",
  },
});

const leapfrog = await prisma.item.create({
  data: {
    name: "Sponge and Squid playing leapfrog",
    description: "Reclaimed paper",
    type: "Tchotchke",
    isFramed: false,
    length: 6,
    width: 6,
    height: 6,
    imageFilename: "leapfrog.gif",
  },
});

const graph = await prisma.item.create({
  data: {
    name: "Look at this graph",
    type: "Photograph",
    imageFilename: "lookatthisgraph.png",
    description: "Bar chart, framed, originally held by Chad Kroeger",
    isFramed: true,
    length: 4,
    width: 6,
    height: null,
  },
});
