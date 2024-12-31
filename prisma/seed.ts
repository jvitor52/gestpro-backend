import prisma from '../src/configs/prisma.config';

async function main() {}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error: any) => {
    console.error('Error seed: ', error);
    await prisma.$disconnect();
    process.exit(1);
  });
