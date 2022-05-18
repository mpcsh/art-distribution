import { PrismaClient } from "@prisma/client";
import t from "tap";

t.test("can connect to the db", async () => {
  const prisma = new PrismaClient();
  const johnDoe = await prisma.User.findFirst({
    where: { name: "John Doe" },
  });
  t.equal(johnDoe.id, 1);
});
