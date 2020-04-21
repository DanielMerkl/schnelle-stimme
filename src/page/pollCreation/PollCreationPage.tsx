import React, { FC, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Divider, Fab, TextField, Typography } from '@material-ui/core';
import { Publish } from '@material-ui/icons';

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

  const handlePublishClick = () => {
    // TODO: implement validation
  };

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
      <Divider />
      <StyledFab
        variant="extended"
        color="primary"
        size="large"
        onClick={handlePublishClick}
      >
        <StyledPublishIcon />
        veröffentlichen
      </StyledFab>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  height: fit-content;
  padding: 2rem 1rem 8rem 1rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: minmax(min-content, 600px);
  justify-content: center;
  @media (max-width: 450px) {
    padding: 2rem 1rem 2rem 1rem;
  }
`;

const StyledFab = styled(Fab)`
  max-width: 220px;
  width: 100%;
  justify-self: end;
  @media (max-width: 450px) {
    max-width: none;
  }
`;

const StyledPublishIcon = styled(Publish)`
  margin-right: 0.5rem;
`;
