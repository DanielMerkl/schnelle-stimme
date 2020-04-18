import React, { FC } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

import { PollType } from '../../types/enum/PollType';
import { pollTypeToGerman } from '../../utils/function/pollTypeToGerman';

interface Props {
  value: PollType;
  onChange: (pollType: PollType) => void;
}

export const PollTypeSelection: FC<Props> = ({ value, onChange }) => {
  const handleChange = (event: { target: { value: unknown } }) => {
    onChange(event.target.value as PollType);
  };

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel id="poll-type-label">Typ</InputLabel>
      <Select
        label="Typ"
        labelId="poll-type-label"
        id="poll-type"
        variant="outlined"
        value={value}
        onChange={handleChange}
      >
        {Object.values(PollType).map((pollType) => (
          <MenuItem key={pollType} value={pollType}>
            {pollTypeToGerman(pollType)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
