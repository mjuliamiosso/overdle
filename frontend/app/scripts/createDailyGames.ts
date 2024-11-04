import { PrismaClient, GameType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const existingGames = await prisma.game.findMany({
    where: { date: today }
  });

  if (existingGames.length > 0) {
    console.log('Games for today have already been created.');
    return;
  }

  const threeDaysAgo = new Date();
  threeDaysAgo.setDate(today.getDate() - 3);
  threeDaysAgo.setHours(0, 0, 0, 0);

  const recentHeroIds = await prisma.game.findMany({
    where: {
      date: {
        gte: threeDaysAgo,
        lt: today
      }
    },
    select: {
      heroId: true
    }
  }).then(games => games.map(game => game.heroId));

  const availableHeroes = await prisma.hero.findMany({
    where: {
      id: { notIn: recentHeroIds }
    }
  });

  const selectedHero = availableHeroes[Math.floor(Math.random() * availableHeroes.length)]

  const selectRandomItem = async (model: any, heroId: number) => {
    const items = await model.findMany({ where: { heroId } });
    return items.length > 0 ? items[Math.floor(Math.random() * items.length)] : null;
  }

  for (const gameType of Object.values(GameType)) {
    const gameData: any = {
      gameType,
      date: today,
      heroId: selectedHero.id
    };

    switch (gameType) {
      case 'QUOTE':
        const quote = await selectRandomItem(prisma.quote, selectedHero.id);
        if (quote) gameData.quoteId = quote.id;
        break;
      case 'ABILITY':
        const ability = await selectRandomItem(prisma.ability, selectedHero.id);
        if (ability) gameData.abilityId = ability.id;
        break;
      case 'EMOJI':
        const emoji = await selectRandomItem(prisma.emoji, selectedHero.id);
        if (emoji) gameData.emojiId = emoji.id;
        break;
    }

    const game = await prisma.game.create({ data: gameData });

    await prisma.lastHero.create({
      data: {
        gameId: game.id,
        heroId: selectedHero.id,
        dateUsed: today
      }
    });

    console.log('Daily games created successfully.');
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });