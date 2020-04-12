import React, { FC } from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

interface Props {
  svg: string;
  alt: string;
  gridArea: 'first' | 'second' | 'third';
  headline: string;
  subtext: string;
}

export const UniqueSellingPoint: FC<Props> = ({
  svg,
  alt,
  gridArea,
  headline,
  subtext,
}) => (
  <Wrapper gridArea={gridArea}>
    <StyledImg src={svg} alt={alt} />
    <Typography variant="h5" align="center">
      {headline}
    </Typography>
    <Typography align="center">{subtext}</Typography>
  </Wrapper>
);

interface WrapperProps {
  gridArea: string;
}

const Wrapper = styled.section<WrapperProps>`
  max-width: 400px;
  grid-area: ${(props) => props.gridArea};
  display: grid;
  gap: 0.5rem;
  grid-template-rows: auto auto 1fr;
  justify-items: center;
`;

const StyledImg = styled.img`
  max-width: 150px;
`;
