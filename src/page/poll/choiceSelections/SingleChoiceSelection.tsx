import React, { FC } from 'react';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@material-ui/core';

import { Choice } from '../../../types/interface/Choice';
import { SingleChoiceAnswer } from '../../../types/type/SingleChoiceAnswer';
import { SetAnswerType } from '../PollPage';

interface Props {
  answer: SingleChoiceAnswer | null;
  choices: Array<Choice>;
  setAnswer: SetAnswerType;
}

export const SingleChoiceSelection: FC<Props> = ({
  answer,
  choices,
  setAnswer,
}) => (
  <FormControl>
    <RadioGroup
      aria-label="Antwortmöglichkeiten"
      name="Antwortmöglichkeiten"
      value={answer}
      onChange={(event) => setAnswer(Number(event.target.value))}
    >
      {choices.map((choice, index) => (
        <FormControlLabel
          key={choice.id}
          control={<Radio color="primary" />}
          label={choice.text}
          value={index}
        />
      ))}
    </RadioGroup>
  </FormControl>
);
