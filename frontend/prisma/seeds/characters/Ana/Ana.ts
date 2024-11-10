import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedAna() {
  await prisma.hero.create({
    data: {
      name: 'Ana',
      gender: 'Female',
      role: 'Support',
      affiliation: 'Overwatch',
      region: 'Egypt',
      releaseYear: 2016,
      quotes: {
        create: [
          { text: 'Justice delivered.', audioUrl: '/audio/ana_justice_delivered.mp3' },
        ],
      },
      abilities: {
        create: [
          { name: 'Sleep Dart', imageUrl: '/images/ana_sleep_dart.png' },
        ],
      },
      emojis: {
        create: [
          { emojiSequence: ['😴', '🔫'] },
        ],
      },
    },
  });
}
