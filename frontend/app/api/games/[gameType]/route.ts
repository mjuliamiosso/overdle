import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';
import { GameType } from '@prisma/client';
import { cookies } from 'next/headers';

export async function GET(
  request: Request,
  { params }: { params: { gameType: string } }
) {
  const { gameType } = params;

  if (!gameType) {
    return NextResponse.json({ error: 'Invalid game type' }, { status: 400 });
  }

  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const game = await prisma.game.findFirst({
      where: {
        gameType: gameType.toUpperCase() as GameType,
        date: today,
      },
      include: {
        hero: true,
        quote: true,
        ability: true,
        emoji: true,
        attempts: true,
      },
    });

    if (!game) {
      return NextResponse.json({ error: 'Game not found for today' }, { status: 404 });
    }

    const cookieStore = await cookies();
    const userId = cookieStore.get('userId')?.value;
    const parsedUserId = userId ? parseInt(userId, 10) : null;

    const [userAttempts, totalAttempts, successfulAttempts] = await Promise.all([
      parsedUserId
        ? prisma.attempt.count({
          where: { userId: parsedUserId, gameId: game.id },
        })
        : Promise.resolve(0),
      prisma.attempt.count({ where: { gameId: game.id } }),
      prisma.attempt.count({ where: { gameId: game.id, isCorrect: true } }),
    ]);

    const responseData = {
      id: game.id,
      gameType: game.gameType,
      date: game.date,
      userAttempts,
      totalAttempts,
      successfulAttempts,
    };

    return NextResponse.json(responseData, { status: 200 });
  } catch (error) {
    console.error('Error fetching game:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
