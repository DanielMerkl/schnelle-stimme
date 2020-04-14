import React, {
  ChangeEvent,
  FC,
  useContext,
  useState,
  KeyboardEvent,
} from 'react';
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

  const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      submit();
    }
  };

  const submit = () => {
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
        onKeyPress={handleKeyPress}
        inputProps={{ 'data-testid': 'topic-input' }}
      />
      <Fab variant="extended" color="primary" onClick={submit}>
        <StyledIcon />
        erstellen
      </Fab>
    </CallToActionWrapper>
  );
};

const StyledIcon = styled(Add)`
  margin-right: 0.5rem;
`;
