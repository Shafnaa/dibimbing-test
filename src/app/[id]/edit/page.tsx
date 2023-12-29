import EditForm from "@/app/components/EditForm";
import { getNoteById } from "@/app/lib/data";
import { Heading } from "@chakra-ui/react";

async function EditNotes({ params }: { params: { id: string } }) {
  const note = await getNoteById({ id: params.id });

  return (
    <main className="max-w-screen-lg min-h-screen mx-auto py-6">
      <Heading>Create new Notes</Heading>
      <EditForm noteData={note} />
    </main>
  );
}

export default EditNotes;
