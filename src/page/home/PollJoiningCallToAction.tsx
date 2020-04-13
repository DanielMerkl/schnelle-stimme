import React, { ChangeEvent, FC, useState } from 'react';
import { Fab, TextField, Typography } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';
import styled from 'styled-components';

import { CallToActionWrapper } from './CallToActionWrapper';

export const PollJoiningCallToAction: FC = () => {
  const [code, setCode] = useState('');

  const handleCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const updatedCode = event.target.value;
    if (!Number.isNaN(Number(updatedCode)) && updatedCode.length <= 5) {
      setCode(updatedCode);
    }
  };

  const handleJoinClick = () => {
    // TODO implementieren
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
        helperText=" "
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
