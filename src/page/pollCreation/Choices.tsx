import React, { Dispatch, FC, SetStateAction, useMemo } from 'react';
import { IconButton, TextField } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import styled from 'styled-components';

import { Choice } from '../../types/interface/Choice';

interface Props {
  choices: Array<Choice>;
  setChoices: Dispatch<SetStateAction<Array<Choice>>>;
}

type ChoiceText = string;
type Count = number;

export const Choices: FC<Props> = ({ choices, setChoices }) => {
  const choiceTextCount: Map<ChoiceText, Count> = useMemo(() => {
    const map = new Map<ChoiceText, Count>();
    choices.forEach((choice) => {
      const oldCount: number | undefined = map.get(choice.text);
      const newCount = !!oldCount ? oldCount + 1 : 1;
      map.set(choice.text, newCount);
    });

    return map;
  }, [choices]);

  const handleChange = (id: string, updatedChoiceText: string) => {
    setChoices((prevState) => {
      const choicesCopy = [...prevState];
      const index = prevState.findIndex((choice) => choice.id === id);
      choicesCopy[index].text = updatedChoiceText;
      return choicesCopy;
    });
  };

  const handleDeleteClick = (idToBeDeleted: string) => {
    setChoices((prevState) => {
      return prevState.filter((choice) => choice.id !== idToBeDeleted);
    });
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
              aria-label="löschen"
              onClick={() => handleDeleteClick(choice.id)}
            >
              <Delete />
            </IconButton>
          </ChoiceWrapper>
        );
      })}
    </>
  );
};

const ChoiceWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 56px;
`;
