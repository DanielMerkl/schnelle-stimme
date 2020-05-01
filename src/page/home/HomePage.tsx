import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

import { UniqueSellingPoints } from './UniqueSellingPoints';
import { PollCreationCallToAction } from './PollCreationCallToAction';
import { PollJoiningCallToAction } from './PollJoiningCallToAction';

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
    <CallToActionsWrapper>
      <PollCreationCallToAction />
      <PollJoiningCallToAction />
    </CallToActionsWrapper>
    <UniqueSellingPoints />
  </Wrapper>
);

const Wrapper = styled.main`
  height: fit-content;
  max-width: var(--max-app-width);
  margin: 0 auto;
  padding: 3rem 1rem 5rem 1rem;
  display: grid;
  gap: 5rem;
`;

const CallToActionsWrapper = styled.div`
  max-width: 1000px;
  justify-self: center;
  display: grid;
  gap: 5rem;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
