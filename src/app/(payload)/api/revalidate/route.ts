import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

interface RevalidateRequest {
  secret: string;
  path?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as RevalidateRequest;
    const { secret, path = '/' } = body;

    if (secret !== process.env.REVALIDATION_TOKEN) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    revalidatePath(path);

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      path,
    });
  } catch (err) {
    const error = err as Error;
    return NextResponse.json({ message: error.message || 'Error processing request' }, { status: 500 });
  }
}
