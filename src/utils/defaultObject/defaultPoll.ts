import { Poll } from '../../types/interface/Poll';
import { PollType } from '../../types/enum/PollType';

export const defaultPoll: Poll = {
  id: '',
  invitationCode: -1,
  topic: '',
  description: '',
  choices: [],
  type: PollType.SINGLE_CHOICE,
  isNameMandatory: false,
  isResultSecret: false,
  answers: [],
};
