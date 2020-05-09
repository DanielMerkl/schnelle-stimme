import React, { FC } from 'react';
import { Fab, Typography } from '@material-ui/core';
import { PollOutlined } from '@material-ui/icons';
import styled from 'styled-components';

interface Props {
  onClick: () => void;
}

export const AlreadyParticipatedDialog: FC<Props> = ({ onClick }) => (
  <Wrapper>
    <Typography variant="h5" align="center">
      Vielen Dank für deine Teilnahme an der Umfrage!
    </Typography>
    <StyledFab
      variant="extended"
      color="primary"
      size="large"
      onClick={onClick}
    >
      <StyledIcon />
      zum Ergebnis
    </StyledFab>
  </Wrapper>
);

const Wrapper = styled.main`
  height: fit-content;
  padding: 3rem 1.5rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: minmax(min-content, 600px);
  justify-content: center;
`;

const StyledFab = styled(Fab)`
  padding: 0 2rem;
  justify-self: center;
`;

const StyledIcon = styled(PollOutlined)`
  margin-right: 0.5rem;
`;
