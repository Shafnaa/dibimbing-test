"use client";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { createNotes } from "../lib/data";
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" colorScheme="blue" aria-disabled={pending}>
      Create
    </Button>
  );
}

const CreateNote = () => {
  const [state, formAction] = useFormState(createNotes, initialState);
  return (
    <main className="max-w-screen-lg min-h-screen mx-auto py-6">
      <Heading>Create new Notes</Heading>
      <form action={formAction} className="py-4 flex flex-col gap-2">
        <FormControl>
          <FormLabel>Note Title</FormLabel>
          <Input
            placeholder="Title"
            name="title"
            id="title"
            type="text"
            required
          />
        </FormControl>
        <FormControl>
          <FormLabel>Note Body</FormLabel>
          <Input
            placeholder="Body"
            name="body"
            id="body"
            type="text"
            required
          />
        </FormControl>
        <SubmitButton />
      </form>
      <p>{state?.message}</p>
    </main>
  );
};

export default CreateNote;
