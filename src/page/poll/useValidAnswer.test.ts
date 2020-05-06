import { renderHook } from '@testing-library/react-hooks';
import { useIsValidAnswer } from './useIsValidAnswer';
import { PollType } from '../../types/enum/PollType';

describe('useValidAnswer', () => {
  it('returns false if answer is null', () => {
    const { result } = renderHook(() =>
      useIsValidAnswer(null, PollType.SINGLE_CHOICE)
    );

    expect(result.current).toBeFalsy();
  });

  it('returns false if pollType is undefined', () => {
    const { result } = renderHook(() => useIsValidAnswer(1, undefined));

    expect(result.current).toBeFalsy();
  });

  it('returns true if singleChoiceAnswer is valid', () => {
    const { result } = renderHook(() =>
      useIsValidAnswer(1, PollType.SINGLE_CHOICE)
    );

    expect(result.current).toBeTruthy();
  });

  it('returns true if multipleChoiceAnswer is valid', () => {
    const { result } = renderHook(() =>
      useIsValidAnswer([1, 2, 3], PollType.MULTIPLE_CHOICE)
    );

    expect(result.current).toBeTruthy();
  });

  it('returns false if multipleChoiceAnswer is empty array', () => {
    const { result } = renderHook(() =>
      useIsValidAnswer([], PollType.MULTIPLE_CHOICE)
    );

    expect(result.current).toBeFalsy();
  });
});
