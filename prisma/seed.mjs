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
    star_limit: 3,
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
