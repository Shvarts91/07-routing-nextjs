type NoteTag = "Work" | "Personal" | "Shopping" | "Meeting" | "Todo";

export interface Note {
  id: number;
  title: string;
  content: string;
  tag: NoteTag;
  createdAt: string;
  updatedAt: string;
}

export interface CreateNoteType {
  title: string;
  content?: string;
  tag: "" | NoteTag;
}

// export type Category = {
//   id: string;
//   name: string;
//   description: string;
//   createdAt: string;
//   updatedAt: string;
// };

export type Category = {
  id: number;
  name: string;
};
