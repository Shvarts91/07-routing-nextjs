import axios, { type AxiosResponse } from "axios";
import type { Category, CreateNoteType, Note } from "../types/note";

export interface NotesResponse {
  notes: Note[];
  totalPages: number;
}

axios.defaults.baseURL = "https://notehub-public.goit.study/api";

export const fetchNotes = async (
  page: number = 1,
  search: string = "",
  tag?: string
): Promise<NotesResponse> => {
  const perPage = 12;

  const params: Record<string, string | number> = {
    page,
    perPage,
  };

  if (search.trim()) {
    params.search = search;
  }

  if (tag && tag.toLowerCase() !== "all") {
    params.tag = tag;
  }

  const response: AxiosResponse<NotesResponse> = await axios.get("/notes", {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
    },
    params,
  });

  return response.data;
};

// export const fetchNotes = async (
//   page: number = 1,
//   search: string = "",
//   tag?: string
// ): Promise<NotesResponse> => {
//   const perPage = 12;

//   const params: Record<string, string | number> = {
//     page,
//     perPage,
//     sortBy: "created",
//   };

//   if (search.trim()) {
//     params.search = search;
//   }

//   if (tag) {
//     params.tag = tag;
//   }

//   const response: AxiosResponse<NotesResponse> = await axios.get("/notes", {
//     headers: {
//       Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
//     },
//     params,
//   });

//   return response.data;
// };

export const getTags = async (): Promise<Category[]> => {
  // const perPage = 12;
  let page = 1;
  let hasMore = true;
  const tagsSet = new Set<string>();

  while (hasMore) {
    const { notes, totalPages } = await fetchNotes(page, "", undefined);

    for (const note of notes) {
      if (note.tag) {
        tagsSet.add(note.tag);
      }
    }

    page += 1;
    hasMore = page <= totalPages;
  }

  const result = Array.from(tagsSet).map((tag, index) => ({
    id: index + 1,
    name: tag,
  }));

  return result;
};

export const createNote = async (payload: CreateNoteType): Promise<Note> => {
  const response = await axios.post<Note>("/notes", payload, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
    },
  });

  return response.data;
};

export const deleteNoteById = async (id: number): Promise<Note> => {
  const response = await axios.delete<Note>(
    `/notes/${id}`,

    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
      },
    }
  );

  return response.data;
};

export const getSingleNote = async (id: number): Promise<Note> => {
  const response = await axios.get<Note>(`/notes/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
    },
  });
  return response.data;
};

// export const getCategories = async () => {
//   const response = await axios.get<Category[]>("/notes/tag", {
//     headers: {
//       Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
//     },
//   });

//   console.log(response);

//   return response.data;
// };

export const getCategories = async () => {
  const notesData = await fetchNotes(); // або всі сторінки, якщо хочеш точність
  const tags = Array.from(new Set(notesData.notes.map((note) => note.tag)));
  // Повертаємо у форматі { id, name } для сумісності

  return tags.map((tag, index) => ({
    id: index + 1,
    name: tag,
  }));
};
