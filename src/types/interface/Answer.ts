import { AnswerContent } from '../type/AnswerContent';

export interface Answer {
  userId: string;
  username?: string;
  content: AnswerContent;
}
