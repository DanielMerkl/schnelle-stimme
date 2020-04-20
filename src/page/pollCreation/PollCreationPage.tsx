import React, { FC, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Divider, TextField, Typography } from '@material-ui/core';

import { PollCreationContext } from '../../context/PollCreationContext';
import { TopicInput } from './TopicInput';
import { PollType } from '../../types/enum/PollType';
import { PollTypeSelection } from './PollTypeSelection';
import { AddAdditionalChoiceInput } from './AddAdditionalChoiceInput';
import { Choice } from '../../types/interface/Choice';
import { Choices } from './Choices';

export const PollCreationPage: FC = () => {
  const { initialTopic } = useContext(PollCreationContext);

  const [topic, setTopic] = useState<string>(initialTopic);
  const [description, setDescription] = useState('');
  const [pollType, setPollType] = useState<PollType>(PollType.SINGLE_CHOICE);
  const [choices, setChoices] = useState<Array<Choice>>([]);

  useEffect(() => {
    setTopic(initialTopic);
  }, [initialTopic]);

  return (
    <Wrapper>
      <Typography variant="h4">Umfrage erstellen</Typography>
      <TopicInput value={topic} onChange={setTopic} />
      <TextField
        id="description"
        label="Beschreibung"
        variant="outlined"
        multiline
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <PollTypeSelection value={pollType} onChange={setPollType} />
      <Divider />
      <Typography variant="h5">Antwortmöglichkeiten</Typography>
      <Choices choices={choices} setChoices={setChoices} />
      <AddAdditionalChoiceInput choices={choices} setChoices={setChoices} />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  height: fit-content;
  padding: 2rem 1rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: minmax(min-content, 600px);
  justify-content: center;
`;
