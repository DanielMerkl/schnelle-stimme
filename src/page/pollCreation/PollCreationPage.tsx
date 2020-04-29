import React, { FC, useContext, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import {
  Divider,
  Fab,
  TextField,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import { Publish } from '@material-ui/icons';

import { PollCreationContext } from '../../context/PollCreationContext';
import { TopicInput } from './TopicInput';
import { PollType } from '../../types/enum/PollType';
import { PollTypeSelection } from './PollTypeSelection';
import { AddAdditionalChoiceInput } from './AddAdditionalChoiceInput';
import { Choice } from '../../types/interface/Choice';
import { Choices } from './Choices';
import { SnackbarContext } from '../../context/SnackbarContext';
import { defaultPoll } from '../../utils/defaultObject/defaultPoll';
import { Poll } from '../../types/interface/Poll';
import { Api } from '../../utils/Api';
import { PollContext } from '../../context/PollContext';
import { useChoiceTextCount } from './useChoiceTextCount';
import { useSessionStorage } from '../../utils/hook/useSessionStorage';
import { PollCreationSessionStorageItem } from '../../types/enum/PollCreationSessionStorageItem';

export const PollCreationPage: FC = () => {
  const { initialTopic } = useContext(PollCreationContext);
  const { showSnackbar } = useContext(SnackbarContext);
  const { openPoll } = useContext(PollContext);

  const [topic, setTopic] = useSessionStorage<string>(
    PollCreationSessionStorageItem.Topic,
    initialTopic
  );
  const [description, setDescription] = useSessionStorage(
    PollCreationSessionStorageItem.Description,
    ''
  );
  const [pollType, setPollType] = useSessionStorage<PollType>(
    PollCreationSessionStorageItem.PollType,
    PollType.SINGLE_CHOICE
  );
  const [choices, setChoices] = useSessionStorage<Array<Choice>>(
    PollCreationSessionStorageItem.Choices,
    []
  );
  const [isLoading, setIsLoading] = useState(false);

  const choiceTextCount = useChoiceTextCount(choices);

  useEffect(() => {
    if (initialTopic !== '') {
      setTopic(initialTopic);
    }
  }, [initialTopic, setTopic]);

  const handlePublishClick = async () => {
    try {
      const poll: Poll = {
        ...defaultPoll,
        topic,
        description,
        type: pollType,
        choices,
      };
      setIsLoading(true);
      const createdPoll = await Api.createPoll(poll);
      setIsLoading(false);
      console.log(`Poll with ID "${createdPoll.id}" was successfully created.`);
      openPoll(createdPoll);
    } catch (e) {
      showSnackbar(e);
    }
  };

  const isValidPoll: boolean = useMemo((): boolean => {
    let hasDuplication = false;
    choiceTextCount.forEach((count) => {
      if (count > 1) {
        hasDuplication = true;
      }
    });

    return topic !== '' && choiceTextCount.size >= 2 && !hasDuplication;
  }, [topic, choiceTextCount]);

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
        disabled={!isValidPoll || isLoading}
      >
        {isLoading ? (
          <CircularProgress size={24} />
        ) : (
          <>
            <StyledPublishIcon />
            veröffentlichen
          </>
        )}
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
