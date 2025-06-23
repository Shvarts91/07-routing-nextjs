"use client";
import Modal from "@/components/Modal/Modal";
import { Note } from "@/types/note";
import { useRouter } from "next/router";

export default function NoteClient({ note }: { note: Note }) {
  const { title, content } = note;
  const router = useRouter();

  const closeModal = () => router.back();

  return (
    <Modal closeModal={closeModal}>
      <h2>{title}</h2>
      <p>{content}</p>
    </Modal>
  );
}
