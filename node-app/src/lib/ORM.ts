import { PrismaClient } from '@prisma/client';

interface Global_ORM {
  prisma: PrismaClient;
}

declare const global: Global_ORM;

const ORM = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') global.prisma = ORM;

export default ORM;