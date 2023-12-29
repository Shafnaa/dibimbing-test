import NotesCard from "./components/NotesCard";
import { getNotes } from "./lib/data";
import { Note } from "./type";

export default async function Home() {
  const notes: Note[] = await getNotes();

  return (
    <main className="max-w-screen-lg min-h-screen flex flex-row justify-center items-center mx-auto py-6">
      {notes.length == 0 ? (
        <p>Note is empty</p>
      ) : (
        <ul className="w-full min-h-screen grid grid-cols-4 gap-4">
          {notes.map((data) => {
            return (
              <li className="w-full h-full max-h-96" key={data.id}>
                <NotesCard data={data} />
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}
