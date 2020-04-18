import { SingleChoiceAnswer } from './SingleChoiceAnswer';
import { MultipleChoiceAnswer } from './MultipleChoiceAnswer';
import { OpenEndedAnswer } from './OpenEndedAnswer';
import { RankingAnswer } from './RankingAnswer';
import { YesNoAnswer } from './YesNoAnswer';
import { PointAllocationAnswer } from './PointAllocationAnswer';
import { MatrixAnswer } from './MatrixAnswer';

export type AnswerContent =
  | SingleChoiceAnswer
  | MultipleChoiceAnswer
  | OpenEndedAnswer
  | RankingAnswer
  | YesNoAnswer
  | PointAllocationAnswer
  | MatrixAnswer;
