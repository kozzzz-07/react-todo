import { atom } from "recoil";
import { Task } from "../models/todo";

export const todoState = atom<Task[]>({
  key: "todoState",
  default: [],
});
