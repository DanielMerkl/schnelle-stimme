import { PollType } from '../enum/PollType';
import { Answer } from './Answer';

export interface Poll {
  id: string;
  invitationCode: number;
  topic: string;
  description?: string;
  choices: Array<string>;
  type: PollType;
  isNameMandatory: boolean;
  isResultSecret: boolean;
  answers: Array<Answer>;
}
