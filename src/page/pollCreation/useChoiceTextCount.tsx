import { useMemo } from 'react';

import { Choice } from '../../types/interface/Choice';

type ChoiceText = string;
type Count = number;

export const useChoiceTextCount = (
  choices: Array<Choice>
): Map<ChoiceText, Count> => {
  return useMemo(() => {
    const map = new Map<ChoiceText, Count>();

    choices.forEach((choice) => {
      const oldCount: number | undefined = map.get(choice.text);
      const newCount = !!oldCount ? oldCount + 1 : 1;
      map.set(choice.text, newCount);
    });

    return map;
  }, [choices]);
};
