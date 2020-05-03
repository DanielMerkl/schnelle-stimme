import React, { FC } from 'react';
import { CircularProgress, Fab } from '@material-ui/core';
import styled from 'styled-components';
import { HowToVoteOutlined } from '@material-ui/icons';

interface Props {
  disabled: boolean;
  isLoading: boolean;
  onClick: () => void;
}

export const SubmitVoteButton: FC<Props> = ({
  disabled,
  isLoading,
  onClick,
}) => {
  return (
    <StyledFab
      variant="extended"
      color="primary"
      size="large"
      onClick={onClick}
      disabled={disabled}
    >
      {isLoading ? (
        <CircularProgress size={24} />
      ) : (
        <>
          <StyledIcon />
          abstimmen
        </>
      )}
    </StyledFab>
  );
};

const StyledFab = styled(Fab)`
  padding: 0 2rem;
  max-width: 200px;
  width: 100%;
  justify-self: end;
  @media (max-width: 450px) {
    max-width: none;
  }
`;

const StyledIcon = styled(HowToVoteOutlined)`
  margin-right: 0.5rem;
`;
