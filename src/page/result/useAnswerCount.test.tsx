import { renderHook } from '@testing-library/react-hooks';
import { useAnswerCount } from './useAnswerCount';
import { defaultPoll } from '../../utils/defaultObject/defaultPoll';
import { PollType } from '../../types/enum/PollType';

describe('useAnswerCount', () => {
  it('returns empty map if poll is null', () => {
    const { result } = renderHook(() => useAnswerCount(null));

    expect(result.current.size).toEqual(0);
  });

  it('counts single choice answers correctly', () => {
    const bananaId = '1';
    const appleId = '2';
    const { result } = renderHook(() =>
      useAnswerCount({
        ...defaultPoll,
        type: PollType.SINGLE_CHOICE,
        choices: [
          { id: bananaId, text: 'Banana' },
          { id: appleId, text: 'Apple' },
        ],
        answers: [
          { userId: 'a', content: bananaId },
          { userId: 'b', content: bananaId },
          { userId: 'c', content: appleId },
        ],
      })
    );

    expect(result.current.get(bananaId)).toEqual(2);
    expect(result.current.get(appleId)).toEqual(1);
  });

  it('counts multiple choice answers correctly', () => {
    const bananaId = '1';
    const appleId = '2';
    const { result } = renderHook(() =>
      useAnswerCount({
        ...defaultPoll,
        type: PollType.MULTIPLE_CHOICE,
        choices: [
          { id: bananaId, text: 'Banana' },
          { id: appleId, text: 'Apple' },
        ],
        answers: [
          { userId: 'a', content: [bananaId, appleId] },
          { userId: 'b', content: [bananaId, appleId] },
          { userId: 'c', content: [bananaId] },
        ],
      })
    );

    expect(result.current.get(bananaId)).toEqual(3);
    expect(result.current.get(appleId)).toEqual(2);
  });
});
