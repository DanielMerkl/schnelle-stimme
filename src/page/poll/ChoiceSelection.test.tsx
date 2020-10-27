import React from 'react';
import { render } from '@testing-library/react';

import { ChoiceSelection } from './ChoiceSelection';
import { PollType } from '../../types/enum/PollType';

describe('ChoiceSelection', () => {
  it('renders single choice selection', () => {
    const { getByTestId } = render(
      <ChoiceSelection
        pollType={PollType.SINGLE_CHOICE}
        choices={[]}
        answer={null}
        setAnswer={() => {}}
      />
    );
    const singleChoiceSelection = getByTestId('single-choice-selection');

    expect(singleChoiceSelection).toBeInTheDocument();
  });

  it('renders multiple choice selection', () => {
    const { getByTestId } = render(
      <ChoiceSelection
        pollType={PollType.MULTIPLE_CHOICE}
        choices={[]}
        answer={null}
        setAnswer={() => {}}
      />
    );
    const multipleChoiceSelection = getByTestId('multiple-choice-selection');

    expect(multipleChoiceSelection).toBeInTheDocument();
  });
});
