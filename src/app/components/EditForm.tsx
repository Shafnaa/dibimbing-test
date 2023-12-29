"use client";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { createNotes, editNotes } from "../lib/data";
import { Note } from "../type";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" colorScheme="blue" aria-disabled={pending}>
      Edit
    </Button>
  );
}

const EditForm = ({ noteData }: { noteData: Note }) => {
  const [state, formAction] = useFormState(editNotes, initialState);

  return (
    <>
      <form action={formAction} className="py-4 flex flex-col gap-2">
        <FormControl>
          <FormLabel>Note Id</FormLabel>
          <Input
            placeholder="Id"
            name="id"
            id="id"
            defaultValue={noteData.id}
            type="number"
            readOnly
          />
        </FormControl>
        <FormControl>
          <FormLabel>Note Title</FormLabel>
          <Input
            placeholder="Title"
            name="title"
            id="title"
            defaultValue={noteData.title}
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
            defaultValue={noteData.body}
            type="text"
            required
          />
        </FormControl>
        <SubmitButton />
      </form>
      <p>{state?.message}</p>
    </>
  );
};

export default EditForm;
