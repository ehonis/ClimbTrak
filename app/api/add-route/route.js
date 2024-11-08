import prisma from '@/prisma';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const res = await request.json();
  const { routeName, grade, type, color } = res;

  const result = await prisma.Route.create({
    data: {
      title: routeName,
      grade,
      type,
      color,
      communityGrade: grade,
    },
  });

  return NextResponse.json({ result });
}
