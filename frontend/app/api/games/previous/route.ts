import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import { GameType } from "@prisma/client";

export async function GET(
  request: Request,
  { params }: { params: { gameType: string } }
) {
  const { gameType } = params;

  if (!gameType) {
    return NextResponse.json({ error: 'Invalid game type' }, { status: 400 });
  }

  try {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    yesterday.setHours(0, 0, 0, 0);

    const game = await prisma.game.findFirst({
      where: {
        gameType: gameType.toUpperCase() as GameType,
        date: yesterday,
      },
      include: {
        hero: true
      }
    });

    if (!game) {
      return NextResponse.json({ error: 'Previous game not found' }, { status: 404 });
    }

    const [totalAttempts, successfulAttempts] = await Promise.all([
      prisma.attempt.count({ where: { gameId: game.id } }),
      prisma.attempt.count({ where: { gameId: game.id, isCorrect: true } })
    ]);

    const responseData = {
      gameType: game.gameType,
      date: game.date,
      hero: game.hero.name,
      totalAttempts,
      successfulAttempts
    };

    return NextResponse.json(responseData, { status: 200 });
  } catch (error) {
    console.error('Error fetching previous game:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
