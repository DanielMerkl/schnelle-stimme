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
  <Wrapper gridarea={gridArea}>
    <img src={svg} alt={alt} width="64px" />
    <Typography variant="h5" align="center">
      {headline}
    </Typography>
    <Typography align="center">{subtext}</Typography>
  </Wrapper>
);

interface WrapperProps {
  gridarea: string;
}

const Wrapper = styled.section<WrapperProps>`
  padding: 1rem;
  max-width: 400px;
  grid-area: ${(props) => props.gridarea};
  display: grid;
  gap: 1rem;
  grid-template-rows: auto auto 1fr;
  justify-items: center;
`;
