// lib/api.ts
import { Note } from "@/types/note";
import axios from "axios";

const BASE_URL = "https://notehub-public.goit.study/api";
const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;
console.log("TOKEN:", token);
const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

interface NoteListResponse {
  notes: Note[];
  total: number;
}
export const getNotes = async (
  categoryId?: string,
): Promise<NoteListResponse> => {
  const res = await instance.get<NoteListResponse>("/notes", {
    params: categoryId ? { categoryId } : {},
  });
  return res.data;
};

export const getSingleNote = async (id: string) => {
  const res = await axios.get<Note>(`/notes/${id}`);
  return res.data;
};
// lib/api.ts
export type Category = {
  id: string;
  name: string;
};

export const categories: Category[] = [
  { id: "todo", name: "Todo" },
  { id: "work", name: "Work" },
  { id: "personal", name: "Personal" },
  { id: "meeting", name: "Meeting" },
  { id: "shopping", name: "Shopping" },
];

export const getCategories = async (): Promise<Category[]> => {
  return Promise.resolve(categories);
};
