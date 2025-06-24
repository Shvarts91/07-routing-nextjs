"use client";
import Modal from "@/components/Modal/Modal";
import { Note } from "@/types/note";
import { useRouter } from "next/navigation";
import css from "./NotePreview.module.css";

export default function NotePreviewClient({ note }: { note: Note }) {
  const router = useRouter();

  const closeModal = () => router.back();

  return (
    <Modal closeModal={closeModal}>
      <div className={css.container}>
        <header className={css.header}>
          <h2>{note.title}</h2>
        </header>
        <div className={css.date}>
          <time>{new Date(note.createdAt).toLocaleString()}</time>
        </div>
        <p className={css.content}>{note.content}</p>
        {note.tag && <span className={css.tag}>{note.tag}</span>}

        <button onClick={closeModal} className={css.backBtn}>
          Back
        </button>
      </div>
    </Modal>
  );
}
