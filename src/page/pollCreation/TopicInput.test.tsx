import React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TopicInput } from './TopicInput';

describe('TopicInput', () => {
  const onChangeMock = jest.fn();
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(<TopicInput value={''} onChange={onChangeMock} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be required', () => {
    const { getByLabelText } = renderResult;
    const topicInput = getByLabelText('Thema / Frage *');

    expect(topicInput).toBeRequired();
  });

  it('should be focused', () => {
    const { getByLabelText } = renderResult;
    const topicInput = getByLabelText('Thema / Frage *');

    expect(topicInput).toHaveFocus();
  });

  it('calls onChange-callback correctly', () => {
    const { getByLabelText } = renderResult;
    const topicInput = getByLabelText('Thema / Frage *');

    userEvent.type(topicInput, 'Banana');

    expect(onChangeMock).toHaveBeenCalledWith('Banana');
  });

  it('displays error state when input is empty and was targeted', async () => {
    const { rerender, getByLabelText } = renderResult;
    const topicInput = getByLabelText('Thema / Frage *');

    fireEvent.blur(topicInput);

    expect(topicInput).toBeInvalid();

    rerender(<TopicInput value={'Banane'} onChange={() => {}} />);

    expect(topicInput).toBeValid();

    rerender(<TopicInput value={''} onChange={() => {}} />);

    expect(topicInput).toBeInvalid();
  });
});
