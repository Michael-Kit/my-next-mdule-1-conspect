import { Note } from "@/types/note";
import NoteItem from "../NoteItem/NoteItem";

interface Props {
  notes: Note[];
}

const Notelist = ({ notes }: Props) => {
  return (
    <ul>
      {notes.map((note) => (
        <NoteItem key={note.id} item={note} />
      ))}
    </ul>
  );
};

export default Notelist;
