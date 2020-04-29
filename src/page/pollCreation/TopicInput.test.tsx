import React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';

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

  it('calls onChange-callback correcty', () => {
    const { getByLabelText } = renderResult;
    const topicInput = getByLabelText('Thema / Frage *');

    fireEvent.change(topicInput, { target: { value: 'Banana' } });

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
