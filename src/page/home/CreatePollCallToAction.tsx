import React, { ChangeEvent, FC, useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';

import { CallToActionWrapper } from './CallToActionWrapper';

export const CreatePollCallToAction: FC = () => {
  const [topic, setTopic] = useState('');

  const handleTopicChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTopic(event.target.value);
  };

  const handleCreateClick = () => {
    // TODO: implementieren
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
