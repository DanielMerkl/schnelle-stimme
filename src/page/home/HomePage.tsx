import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

import { CallToActions } from './CallToActions';
import { UniqueSellingPoints } from './UniqueSellingPoints';

export const HomePage: FC = () => (
  <Wrapper>
    <section>
      <Typography variant="h4" align="center" gutterBottom>
        3.. 2.. 1.. Abgestimmt!
      </Typography>
      <Typography align="center">
        Der schnellste Weg, eine Umfrage zu machen.
      </Typography>
    </section>
    <CallToActions />
    <UniqueSellingPoints />
  </Wrapper>
);

const Wrapper = styled.main`
  max-width: var(--max-app-width);
  margin: 0 auto;
  padding: 3rem 2rem 5rem 2rem;
  display: grid;
  gap: 5rem;
`;
