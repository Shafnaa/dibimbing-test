"use client";

import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { deleteNotes } from "../lib/data";

function DeleteButton({ id }: { id: string }) {
  const router = useRouter();
  const handleClick = async (id: string) => {
    await deleteNotes({ id: id });
    router.push("/");
  };

  return (
    <Button colorScheme="red" onClick={() => handleClick(id)}>
      Delete
    </Button>
  );
}

export default DeleteButton;
