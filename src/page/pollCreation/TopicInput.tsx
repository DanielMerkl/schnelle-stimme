import React, { FC, useState } from 'react';
import { TextField } from '@material-ui/core';

interface Props {
  value: string;
  onChange: (topic: string) => void;
}

export const TopicInput: FC<Props> = ({ value, onChange }) => {
  const [wasTargeted, setWasTargeted] = useState(false);

  return (
    <TextField
      id="topic"
      label="Thema / Frage"
      variant="outlined"
      required
      fullWidth
      autoFocus
      error={wasTargeted && value === ''}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      onBlur={() => setWasTargeted(true)}
    />
  );
};
