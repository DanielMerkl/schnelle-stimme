import React, { FC } from 'react';
import styled from 'styled-components';

import { UniqueSellingPoint } from './UniqueSellingPoint';
import speed from '../../assets/speed.svg';
import money_off from '../../assets/money_off.svg';
import mood from '../../assets/mood.svg';
import { uspSubtexts } from './utils/uspSubtexts';

export const UniqueSellingPoints: FC = () => (
  <Wrapper>
    <UniqueSellingPoint
      svg={speed}
      alt="Tachometer"
      gridArea="first"
      headline="Schnell"
      subtext={uspSubtexts.fast}
    />
    <UniqueSellingPoint
      svg={money_off}
      alt="Durchgestrichenes Dollar-Zeichen"
      gridArea="second"
      headline="Kostenlos"
      subtext={uspSubtexts.free}
    />
    <UniqueSellingPoint
      svg={mood}
      alt="Lachender Smiley"
      gridArea="third"
      headline="Unkompliziert"
      subtext={uspSubtexts.straightForward}
    />
  </Wrapper>
);

const Wrapper = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: 'first second third';
  justify-items: center;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'first second'
      'third third';
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'first'
      'second'
      'third';
  }
`;
