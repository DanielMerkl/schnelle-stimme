import React, { FC } from 'react';
import styled from 'styled-components';

import { PollCreationCallToAction } from './PollCreationCallToAction';
import { PollJoiningCallToAction } from './PollJoiningCallToAction';

export const CallToActions: FC = () => (
  <Wrapper>
    <PollCreationCallToAction />
    <PollJoiningCallToAction />
  </Wrapper>
);

const Wrapper = styled.div`
  max-width: 1000px;
  justify-self: center;
  display: grid;
  gap: 5rem;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
