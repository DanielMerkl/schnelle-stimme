import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { TopicInput } from './TopicInput';

describe('TopicInput', () => {
  it('renders correctly', () => {
    const { container } = render(
      <TopicInput value={'Banana'} onChange={jest.fn()} />
    );

    expect(container).toMatchSnapshot();
  });

  it('displays error state when input is empty and was targeted', async () => {
    const { rerender, getByLabelText } = render(
      <TopicInput value={''} onChange={jest.fn()} />
    );

    const topicInput = getByLabelText('Thema / Frage *');

    expect(topicInput.getAttribute('aria-invalid')).toEqual('false');

    fireEvent.blur(topicInput);

    expect(topicInput.getAttribute('aria-invalid')).toEqual('true');

    rerender(<TopicInput value={'Banane'} onChange={jest.fn()} />);

    expect(topicInput.getAttribute('aria-invalid')).toEqual('false');

    rerender(<TopicInput value={''} onChange={jest.fn()} />);

    expect(topicInput.getAttribute('aria-invalid')).toEqual('true');
  });
});
