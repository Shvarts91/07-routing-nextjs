import { fetchNotes } from "@/lib/api";
import Notes from "./Notes.client";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug?: string[];
  };
};

export default async function FilteredNotesPage({ params: { slug } }: Props) {
  const tag = slug?.[0] === "all" ? undefined : slug?.[0];

  try {
    const initialData = await fetchNotes(1, "", tag);
    return <Notes initialData={initialData} tag={tag} />;
  } catch {
    return notFound();
  }
}
