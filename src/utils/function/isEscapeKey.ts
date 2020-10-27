import { KeyboardEvent } from 'react';

export const isEscapeKey = (event: KeyboardEvent): boolean => {
  return event.key === 'Escape';
};
