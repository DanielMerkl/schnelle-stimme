import React, { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import { Fab, TextField, Typography } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';
import styled from 'styled-components';

import { CallToActionWrapper } from './CallToActionWrapper';

export const PollJoiningCallToAction: FC = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState(' ');

  const handleCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const updatedCode = event.target.value;
    if (!Number.isNaN(Number(updatedCode)) && updatedCode.length <= 5) {
      setError(false);
      setHelperText(' ');
      setCode(updatedCode);
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      handleJoinClick();
    }
  };

  const handleJoinClick = () => {
    if (code.length === 5) {
      // TODO: trigger join mechanism
    } else {
      setError(true);
      setHelperText('Der Code ist nicht 5-stellig.');
    }
  };

  return (
    <CallToActionWrapper>
      <Typography variant="h5" gutterBottom>
        Trete einer Umfrage bei
      </Typography>
      <TextField
        variant="outlined"
        label="5-stelliger Code"
        value={code}
        onChange={handleCodeChange}
        inputMode="numeric"
        error={error}
        helperText={helperText}
        onKeyPress={handleKeyPress}
      />
      <Fab variant="extended" color="primary" onClick={handleJoinClick}>
        <StyledIcon />
        beitreten
      </Fab>
    </CallToActionWrapper>
  );
};

const StyledIcon = styled(ExitToApp)`
  margin-right: 0.5rem;
`;
