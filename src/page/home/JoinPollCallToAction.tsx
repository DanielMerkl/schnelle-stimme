import React, { ChangeEvent, FC, useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';

import { CallToActionWrapper } from './CallToActionWrapper';

export const JoinPollCallToAction: FC = () => {
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
      />
      <Button variant="contained" color="primary" onClick={handleJoinClick}>
        beitreten
      </Button>
    </CallToActionWrapper>
  );
};
