import { getSingleNote } from "@/lib/api";

import NotePreviewClient from "./NotePreview.client";

type Props = {
  params: Promise<{ id: string }>;
};

const NoteModalPage = async ({ params }: Props) => {
  const { id } = await params;
  const note = await getSingleNote(Number(id));

  return <NotePreviewClient note={note} />;
};

export default NoteModalPage;
