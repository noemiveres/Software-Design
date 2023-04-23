import { User } from "./User";

export interface Question {
    id: number;
    author: User;
    title: string;
    text: string;
    creationDate: Date;
    picture: string;
    tags: string[];
  }