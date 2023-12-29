"use server";

import { z } from "zod";

const baseUrl = process.env.BASE_ENDPOINT;

const createNoteSchema = z.object({
  title: z.string().min(1).max(255),
  body: z.string().min(1),
});

export async function getNotes() {
  const res = await fetch(`${baseUrl}/api/notes`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    return { message: "Failed to get Notes" };
  }

  return res.json();
}

export async function getNoteById({ id }: { id: string }) {
  const res = await fetch(`${baseUrl}/api/notes/${id}`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    return { message: "Failed to get Note" };
  }

  return res.json();
}

export async function createNotes(prevState: any, formData: any) {
  const validation = createNoteSchema.safeParse({
    title: formData.get("title"),
    body: formData.get("body"),
  });

  if (!validation.success) {
    return { message: "Failed to create Note" };
  }

  const data = validation.data;

  const res = await fetch(`${baseUrl}/api/notes/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    return { message: `Failed to create Note` };
  }

  return { message: `Success` };
}

export async function editNotes(prevState: any, formData: any) {
  const validation = createNoteSchema.safeParse({
    title: formData.get("title"),
    body: formData.get("body"),
  });

  if (!validation.success) {
    return { message: "Failed to edit Note" };
  }

  const data = validation.data;

  const res = await fetch(`${baseUrl}/api/notes/${formData.get("id")}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    return { message: `Failed to edit user` };
  }

  return { message: `Success` };
}

export async function deleteNotes({ id }: { id: string }) {
  const res = await fetch(`${baseUrl}/api/notes/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    return { message: "Failed to delete Note" };
  }

  return { message: `Success` };
}
