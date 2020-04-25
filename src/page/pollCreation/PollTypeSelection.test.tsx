import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { PollTypeSelection } from './PollTypeSelection';
import { PollType } from '../../types/enum/PollType';
import { keyboardEventMock } from '../../utils/keyboardEventMock';
import { pollTypeToGerman } from '../../utils/function/pollTypeToGerman';

describe('PollTypeSelection', () => {
  it('renders the selection input with correct initial value', () => {
    const { getByLabelText } = render(
      <PollTypeSelection value={PollType.SINGLE_CHOICE} onChange={jest.fn()} />
    );
    const selection = getByLabelText('Art der Umfrage');

    expect(selection).toBeInTheDocument();
  });

  it('renders with correct initial value', () => {
    const { getByText } = render(
      <PollTypeSelection value={PollType.SINGLE_CHOICE} onChange={jest.fn()} />
    );
    const initialSelectionItem = getByText('Single-Choice');

    expect(initialSelectionItem).toBeInTheDocument();
  });

  it('renders all selection items', async () => {
    const { getByLabelText, findAllByText } = render(
      <PollTypeSelection value={PollType.SINGLE_CHOICE} onChange={jest.fn()} />
    );
    const selection = getByLabelText('Art der Umfrage');

    fireEvent.keyDown(selection, keyboardEventMock.downArrow);

    for (const pollType of Object.values(PollType)) {
      const element = await findAllByText(pollTypeToGerman(pollType));
      expect(element).not.toBeNull();
    }
  });

  it('calls onChange callback correctly', () => {
    const handleChangeMock = jest.fn();

    const { getByLabelText, getByText } = render(
      <PollTypeSelection
        value={PollType.SINGLE_CHOICE}
        onChange={handleChangeMock}
      />
    );
    const selection = getByLabelText('Art der Umfrage');

    fireEvent.keyDown(selection, keyboardEventMock.downArrow);
    const selectionItem = getByText('Multiple-Choice');
    fireEvent.click(selectionItem);

    expect(handleChangeMock).toHaveBeenCalledWith(PollType.MULTIPLE_CHOICE);
  });
});
