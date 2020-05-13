import React, { FC } from 'react';
import { Chip } from '@material-ui/core';
import styled from 'styled-components';

interface Props {
  code: number;
}

export const InvitationCode: FC<Props> = ({ code }) => (
  <StyledChip variant="outlined" label={`Code: ${code}`} />
);

const StyledChip = styled(Chip)`
  width: fit-content;
`;
