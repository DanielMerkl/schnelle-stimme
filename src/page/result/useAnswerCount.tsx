import { useMemo } from 'react';

import { Poll } from '../../types/interface/Poll';
import { ChoiceId } from '../../types/type/ChoiceId';
import { PollType } from '../../types/enum/PollType';
import { SingleChoiceAnswer } from '../../types/type/SingleChoiceAnswer';
import { MultipleChoiceAnswer } from '../../types/type/MultipleChoiceAnswer';

export const useAnswerCount = (poll: Poll | null): Map<ChoiceId, number> => {
  return useMemo(() => {
    const map: Map<ChoiceId, number> = new Map<ChoiceId, number>();

    if (poll === null) {
      return map;
    }

    switch (poll.type) {
      case PollType.SINGLE_CHOICE:
        poll.answers.forEach((answer) => {
          const choiceId = answer.content as SingleChoiceAnswer;
          const prevCount: number | undefined = map.get(choiceId);
          map.set(choiceId, (prevCount ?? 0) + 1);
        });
        break;

      case PollType.MULTIPLE_CHOICE:
        poll.answers.forEach((answer) => {
          const choiceIds = answer.content as MultipleChoiceAnswer;
          choiceIds.forEach((choiceId) => {
            const prevCount: number | undefined = map.get(choiceId);
            map.set(choiceId, (prevCount ?? 0) + 1);
          });
        });
        break;
    }

    return map;
  }, [poll]);
};
