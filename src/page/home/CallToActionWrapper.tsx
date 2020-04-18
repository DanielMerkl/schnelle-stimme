import styled from 'styled-components';
import { Paper } from '@material-ui/core';

export const CallToActionWrapper = styled(Paper)`
  padding: 2.5rem;
  border-radius: 1rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: minmax(min-content, 400px);
  grid-template-rows: 1fr auto auto;
  @media (max-width: 400px) {
    padding: 2rem;
  }
`;
