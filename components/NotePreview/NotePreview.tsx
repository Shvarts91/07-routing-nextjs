"use client";

import { useQuery } from "@tanstack/react-query";
import { getSingleNote } from "@/lib/api"; // або звідки в тебе береться одна нотатка

// import Modal from "./Modal";
// import css from "./NotePreview.module.css"; // зроби новий або використай існуючий
import { Note } from "@/types/note";

interface NotePreviewProps {
  id: number;
}

const NotePreview = ({ id }: NotePreviewProps) => {
  const {
    data: note,
    isLoading,
    isError,
  } = useQuery<Note>({
    queryKey: ["note", id],
    queryFn: () => getSingleNote(id),
  });

  if (isLoading) return <div>Завантаження...</div>;
  if (isError || !note) return <div>Помилка при завантаженні нотатки</div>;

  return (
    <div className={css.preview}>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      {note.tag && <span className={css.tag}>{note.tag}</span>}
      <time>{new Date(note.createdAt).toLocaleString()}</time>
    </div>
  );
};

export default NotePreview;
