import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "../../../../prisma/client";

const createNoteSchema = z.object({
  title: z.string().min(1).max(255),
  body: z.string().min(1),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createNoteSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const newNote = await prisma.notes.create({
    data: {
      title: body.title,
      body: body.body,
    },
  });

  return NextResponse.json(newNote, { status: 201 });
}
