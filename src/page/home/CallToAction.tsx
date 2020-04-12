import React, { FC } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import styled from 'styled-components';

interface Props {
  headline: string;
  inputValue: string;
  inputLabel: string;
  onChange: (newValue: string) => void;
  buttonText: string;
  onClick: () => void;
}

export const CallToAction: FC<Props> = ({
  headline,
  inputValue,
  inputLabel,
  onChange,
  buttonText,
  onClick,
}) => (
  <Wrapper>
    <Typography variant="h5" gutterBottom>
      {headline}
    </Typography>
    <TextField
      variant="outlined"
      label={inputLabel}
      value={inputValue}
      onChange={(event) => onChange(event.target.value)}
    />
    <Button variant="contained" color="primary" onClick={onClick}>
      {buttonText}
    </Button>
  </Wrapper>
);

const Wrapper = styled.section`
  display: grid;
  gap: 1rem;
  grid-template-columns: minmax(min-content, 400px);
  grid-template-rows: 1fr auto auto;
`;
