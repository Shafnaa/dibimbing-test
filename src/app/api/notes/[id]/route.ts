import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "../../../../../prisma/client";

const createNoteSchema = z.object({
  title: z.string().min(1).max(255),
  body: z.string().min(1),
});

export async function GET(request: NextRequest) {
  const id = Number(request.nextUrl.pathname.replace("/api/notes/", ""));

  const note = await prisma.notes.findUnique({
    where: {
      id: id,
    },
  });

  return NextResponse.json(note, { status: 200 });
}

export async function PUT(request: NextRequest) {
  const id = Number(request.nextUrl.pathname.replace("/api/notes/", ""));

  const body = await request.json();
  const validation = createNoteSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const updatedNote = await prisma.notes.update({
    where: {
      id: id,
    },
    data: {
      title: body.title,
      body: body.body,
    },
  });

  return NextResponse.json(updatedNote, { status: 201 });
}

export async function DELETE(request: NextRequest) {
  const id = Number(request.nextUrl.pathname.replace("/api/notes/", ""));

  const deletedNote = await prisma.notes.delete({
    where: {
      id: id,
    },
  });

  return NextResponse.json(deletedNote, { status: 200 });
}
