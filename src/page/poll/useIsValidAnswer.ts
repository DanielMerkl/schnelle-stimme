import { AnswerContent } from '../../types/type/AnswerContent';
import { useMemo } from 'react';
import { PollType } from '../../types/enum/PollType';
import { SingleChoiceAnswer } from '../../types/type/SingleChoiceAnswer';
import { MultipleChoiceAnswer } from '../../types/type/MultipleChoiceAnswer';

export const useIsValidAnswer = (
  answer: AnswerContent | null,
  pollType: PollType | undefined
) => {
  return useMemo(() => {
    if (answer === null || pollType === undefined) {
      return false;
    }

    let a;
    switch (pollType) {
      case PollType.SINGLE_CHOICE:
        a = answer as SingleChoiceAnswer;
        return a !== null;

      case PollType.MULTIPLE_CHOICE:
        a = answer as MultipleChoiceAnswer;
        return a.length !== 0;
    }
  }, [answer, pollType]);
};
