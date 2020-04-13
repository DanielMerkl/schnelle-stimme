import React, { ChangeEvent, FC, useContext, useState } from 'react';
import { Fab, TextField, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import styled from 'styled-components';

import { CallToActionWrapper } from './CallToActionWrapper';
import { PollCreationContext } from '../../context/PollCreationContext';

export const PollCreationCallToAction: FC = () => {
  const { openWithInitialTopic } = useContext(PollCreationContext);

  const [topic, setTopic] = useState('');

  const handleTopicChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTopic(event.target.value);
  };

  const handleCreateClick = () => {
    openWithInitialTopic(topic);
  };

  return (
    <CallToActionWrapper>
      <Typography variant="h5" gutterBottom>
        Erstelle eine neue Umfrage
      </Typography>
      <TextField
        variant="outlined"
        label="Thema / Frage"
        value={topic}
        onChange={handleTopicChange}
        helperText=" " // empty helper text in order to align it with the other call to action
      />
      <Fab variant="extended" color="primary" onClick={handleCreateClick}>
        <StyledIcon />
        erstellen
      </Fab>
    </CallToActionWrapper>
  );
};

const StyledIcon = styled(Add)`
  margin-right: 0.5rem;
`;
