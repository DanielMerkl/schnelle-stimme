import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { ChoiceResult } from './ChoiceResult';

describe('ChoiceResult', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(
      <ChoiceResult text={'Banana'} numberOfVotes={4} totalNumberOfVotes={10} />
    );
  });

  it('renders choice text', () => {
    const { getByText } = renderResult;
    const choiceText = getByText('Banana');

    expect(choiceText).toBeInTheDocument();
  });

  it('renders percentage', () => {
    const { getByText } = renderResult;
    const percentageDisplay = getByText('40,00 %');

    expect(percentageDisplay).toBeInTheDocument();
  });

  it('renders number of votes', () => {
    const { getByText } = renderResult;
    const numberOfVotesDisplay = getByText('(4)');

    expect(numberOfVotesDisplay).toBeInTheDocument();
  });

  it('calculates the width of the inner bar correctly', () => {
    const { getByTestId } = renderResult;
    const innerBar = getByTestId('inner-bar');

    expect(innerBar).toHaveStyle('width: 40%');
  });
});
