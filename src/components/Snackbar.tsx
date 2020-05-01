import React, { FC } from 'react';
import { IconButton, Snackbar as MuiSnackbar } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import styled from 'styled-components';

interface Props {
  open: boolean;
  message: string;
  onClose: () => void;
}

export const Snackbar: FC<Props> = ({ open, message, onClose }) => {
  return (
    <MuiSnackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
      onClose={onClose}
      message={message}
      autoHideDuration={5000}
      action={
        <StyledIconButton color="inherit" onClick={onClose}>
          <Close />
        </StyledIconButton>
      }
    />
  );
};

const StyledIconButton = styled(IconButton)`
  padding: 0.5rem;
`;
