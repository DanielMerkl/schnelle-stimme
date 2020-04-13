import React, { ChangeEvent, FC, useContext, useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';

import { CallToActionWrapper } from './CallToActionWrapper';
import { PollCreationContext } from '../../context/PollCreationContext';

export const PollCreationCallToAction: FC = () => {
  const { openWithInitialTopic } = useContext(PollCreationContext);

  const [topic, setTopic] = useState('');

  const handleTopicChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTopic(event.target.value);
  };

  const handleCreateClick = () => {
    if (topic !== '') {
      openWithInitialTopic(topic);
    } else {
      // TODO: implement error handling
    }
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
      />
      <Button variant="contained" color="primary" onClick={handleCreateClick}>
        erstellen
      </Button>
    </CallToActionWrapper>
  );
};
