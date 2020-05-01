import { renderHook } from '@testing-library/react-hooks';

import { useChoiceTextCount } from './useChoiceTextCount';
import { Choice } from '../../types/interface/Choice';

describe('useChoiceTextCount', () => {
  it('calculates count correctly', async () => {
    const choices: Array<Choice> = [
      { id: '1', text: 'Text mit Banane' },
      { id: '2', text: 'Text mit Banane' },
      { id: '3', text: 'Text mit Ananas' },
    ];

    const { result, rerender, waitForNextUpdate } = renderHook(() =>
      useChoiceTextCount(choices)
    );

    expect(result.current.get('Text mit Banane')).toEqual(2);
    expect(result.current.get('Text mit Ananas')).toEqual(1);

    rerender([...choices, { id: '4', text: 'Text mit Banane' }]);

    waitForNextUpdate().then(() => {
      expect(result.current.get('Text mit Banane')).toEqual(3);
    });
  });
});
