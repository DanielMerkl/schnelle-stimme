import { PollType } from '../../types/enum/PollType';

export const pollTypeToGerman = (pollType: PollType): string => {
  switch (pollType) {
    case PollType.SINGLE_CHOICE:
      return 'Single-Choice';
    case PollType.MULTIPLE_CHOICE:
      return 'Multiple-Choice';
    case PollType.OPEN_ENDED:
      return 'Offene Antwort';
    case PollType.RANKING:
      return 'Rangfolge';
    case PollType.YES_NO:
      return 'Ja/Nein';
    case PollType.POINT_ALLOCATION:
      return 'Punktvergabe';
    default:
      throw new Error(`invalid poll type "${pollType}"`);
  }
};
