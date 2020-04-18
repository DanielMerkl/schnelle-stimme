import React, { FC, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

import { PollCreationContext } from '../../context/PollCreationContext';
import { TopicInput } from './TopicInput';

export const PollCreationPage: FC = () => {
  const { initialTopic } = useContext(PollCreationContext);

  const [topic, setTopic] = useState<string>(initialTopic);

  useEffect(() => {
    setTopic(initialTopic);
  }, [initialTopic]);

  return (
    <Wrapper>
      <Typography variant="h4" align="center">
        Umfrage erstellen
      </Typography>
      <TopicInput value={topic} onChange={setTopic} />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 2rem 1rem;
  display: grid;
  gap: 1rem;
`;
