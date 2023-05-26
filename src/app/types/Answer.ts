import { Question } from "./Question";
import { User } from "./User";

export interface Answer {
    id: number;
    author: User;
    text: string;
    creationDate: Date;
    picture: string;
    question: Question;
  }