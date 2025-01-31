import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const owner = await prisma.user.upsert({
    where: { email: "alice@prisma.io" },
    update: {},
    create: {
      email: "alice@prisma.io",
      name: "Alice",
      id: "f3f967dc-e8c4-4446-9aac-7263e0ffefc1"
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
