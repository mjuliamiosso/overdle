import { PrismaClient } from '@prisma/client';
import path from 'path';
import fs from 'fs';

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding all characters...");

  const seedPath = path.join(__dirname, 'seeds', 'characters');
  const seedFiles = fs.readdirSync(seedPath).filter(file => file.endsWith('.ts'));

  for (const file of seedFiles) {
    const { default: seedFunction } = await import(path.join(seedPath, file));
    await seedFunction();
  }

  console.log("All characters seeded successfully.");
}

main()
  .catch((e) => {
    console.error("Error seeding characters:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
