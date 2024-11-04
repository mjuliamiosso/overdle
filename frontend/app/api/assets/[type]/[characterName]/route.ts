import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET(
  request: NextRequest,
  { params }: { params: { type: string; charactername: string } }
) {
  const { type, charactername } = params;

  if (!['audio', 'image'].includes(type)) {
    return NextResponse.json({ error: 'Invalid asset type' }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), 'assets', type, charactername);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }

  const contentType = type === 'audio' ? 'audio/mpeg' : 'image/png';
  const file = fs.readFileSync(filePath);

  return new NextResponse(file, {
    headers: { 'Content-Type': contentType },
  });
}
