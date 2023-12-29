import React from "react";
import { getNoteById } from "../lib/data";
import {
  Button,
  Card,
  CardHeader,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import DeleteButton from "../components/DeleteButton";

async function NotePage({ params }: { params: { id: string } }) {
  const note = await getNoteById({ id: params.id });

  return (
    <main className="max-w-screen-lg min-h-screen mx-auto py-6">
      <Card className="min-h-screen p-2">
        <CardHeader className="flex flex-row justify-between items-center">
          <Heading size={"md"}>{note.title}</Heading>
          <div className="flex flex-row gap-4">
            <Button as={Link} href={`/${params.id}/edit`} colorScheme="blue">
              Update
            </Button>
            <DeleteButton id={params.id} />
          </div>
        </CardHeader>
        <Divider />
        <Text>{note.body}</Text>
      </Card>
    </main>
  );
}

export default NotePage;
