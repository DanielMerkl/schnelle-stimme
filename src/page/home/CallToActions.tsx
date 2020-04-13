import React, { FC } from 'react';
import styled from 'styled-components';

import { CreatePollCallToAction } from './CreatePollCallToAction';
import { JoinPollCallToAction } from './JoinPollCallToAction';

export const CallToActions: FC = () => (
  <Wrapper>
    <CreatePollCallToAction />
    <JoinPollCallToAction />
  </Wrapper>
);

const Wrapper = styled.div`
  max-width: 1000px;
  justify-self: center;
  display: grid;
  gap: 5rem;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;
