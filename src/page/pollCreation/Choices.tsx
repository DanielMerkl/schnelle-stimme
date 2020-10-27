import React, { Dispatch, FC, SetStateAction } from 'react';
import { IconButton, TextField } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import styled from 'styled-components';

import { Choice } from '../../types/interface/Choice';
import { useChoiceTextCount } from './useChoiceTextCount';

interface Props {
  choices: Array<Choice>;
  setChoices: Dispatch<SetStateAction<Array<Choice>>>;
}

export const Choices: FC<Props> = React.memo(({ choices, setChoices }) => {
  const choiceTextCount = useChoiceTextCount(choices);

  const handleChange = (id: string, updatedChoiceText: string) => {
    const updatedChoices = [...choices];
    const index = choices.findIndex((choice) => choice.id === id);
    updatedChoices[index].text = updatedChoiceText;
    setChoices(updatedChoices);
  };

  const handleDeleteClick = (id: string) => {
    const filteredChoices = choices.filter((choice) => choice.id !== id);
    setChoices(filteredChoices);
  };

  return (
    <>
      {choices.map((choice, index) => {
        const count = choiceTextCount.get(choice.text);
        const error = !!count && count > 1;

        return (
          <ChoiceWrapper key={choice.id}>
            <TextField
              id={`choice-${index}`}
              label={`${index + 1}. Antwortmöglichkeit`}
              variant="outlined"
              color="primary"
              error={error}
              value={choice.text}
              onChange={(event) => handleChange(choice.id, event.target.value)}
            />
            <IconButton
              aria-label={`${index + 1}. Antwortmöglichkeit löschen`}
              onClick={() => handleDeleteClick(choice.id)}
            >
              <Delete />
            </IconButton>
          </ChoiceWrapper>
        );
      })}
    </>
  );
});

const ChoiceWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 56px;
`;
