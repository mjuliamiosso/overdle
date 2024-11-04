import { NextResponse } from "next/server";
import prisma from '../../../lib/prisma';
import { GameType } from '@prisma/client';
import { cookies } from 'next/headers';

export async function POST(
  request: Request,
  { params }: { params: { gameType: string } }
) {
  const { gameType } = params;
  const body = await request.json();
  const { guess } = body;

  const userIdCookie = (await cookies()).get('userId')?.value;
  const userId = userIdCookie ? parseInt(userIdCookie, 10) : null;

  if (!guess?.trim() || !userId) {
    return NextResponse.json(
      { error: 'Guess and valid user ID are required' },
      { status: 400 }
    );
  }

  try {
    const today: Date = new Date();
    today.setHours(0, 0, 0, 0);

    const game = await prisma.game.findFirst({
      where: {
        gameType: gameType.toUpperCase() as GameType,
        date: today,
      },
      include: { hero: true }
    });

    if (!game) {
      return NextResponse.json({ error: 'Game not found for today' }, { status: 404 });
    }

    const isCorrect = guess.trim().toLowerCase() === game.hero.name.toLocaleLowerCase();

    await prisma.attempt.create({
      data: {
        userId,
        gameId: game.id,
        guess,
        isCorrect
      }
    });

    return NextResponse.json({ isCorrect }, { status: 200 });
  } catch (error) {
    console.error('Error submitting guess:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}