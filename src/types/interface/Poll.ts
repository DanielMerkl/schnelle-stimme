import { PollType } from '../enum/PollType';
import { Answer } from './Answer';
import { Choice } from './Choice';

export interface Poll {
  id: string;
  invitationCode: number;
  topic: string;
  description?: string;
  choices: Array<Choice>;
  type: PollType;
  answers: Array<Answer>;
}
