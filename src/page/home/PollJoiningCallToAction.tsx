import React, {
  ChangeEvent,
  FC,
  KeyboardEvent,
  useContext,
  useState,
} from 'react';
import {
  CircularProgress,
  Fab,
  TextField,
  Typography,
} from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';
import styled from 'styled-components';

import { CallToActionWrapper } from './CallToActionWrapper';
import { messages } from './utils/messages';
import { isEnterKey } from '../../utils/function/isEnterKey';
import { Api } from '../../utils/Api';
import { PollContext } from '../../context/PollContext';
import { SnackbarContext } from '../../context/SnackbarContext';
import { useIsMounted } from '../../utils/hook/useIsMounted';

export const PollJoiningCallToAction: FC = () => {
  const { openPoll } = useContext(PollContext);
  const { showSnackbar } = useContext(SnackbarContext);
  const isMounted = useIsMounted();

  const [code, setCode] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState(' ');
  const [isLoading, setIsLoading] = useState(false);

  const handleCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const updatedCode = event.target.value;
    if (!Number.isNaN(Number(updatedCode)) && updatedCode.length <= 5) {
      setError(false);
      setHelperText(' ');
      setCode(updatedCode);
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
    if (isEnterKey(event)) {
      submit();
    }
  };

  const submit = async () => {
    if (code.length === 5) {
      setIsLoading(true);
      try {
        const foundPoll = await Api.findPollByInvitationCode(Number(code));
        if (foundPoll == null) {
          setError(true);
          setHelperText(messages.error.noPollFound);
        } else {
          openPoll(foundPoll);
        }
      } catch (e) {
        showSnackbar(e);
      }
      if (isMounted.current) {
        setIsLoading(false);
      }
    } else {
      setError(true);
      setHelperText(messages.error.codeIsNotFiveDigits);
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
        id="code"
        onChange={handleCodeChange}
        inputProps={{ inputMode: 'numeric' }}
        error={error}
        helperText={helperText}
        onKeyPress={handleKeyPress}
        autoComplete="off"
      />
      <Fab
        variant="extended"
        color="primary"
        onClick={submit}
        disabled={isLoading}
      >
        {isLoading ? (
          <CircularProgress size={24} />
        ) : (
          <>
            <StyledIcon />
            beitreten
          </>
        )}
      </Fab>
    </CallToActionWrapper>
  );
};

const StyledIcon = styled(ExitToApp)`
  margin-right: 0.5rem;
`;
