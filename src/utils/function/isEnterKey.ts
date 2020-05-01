import { KeyboardEvent } from 'react';

export const isEnterKey = (event: KeyboardEvent): boolean => {
  return event.key === 'Enter';
};
