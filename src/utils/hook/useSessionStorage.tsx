import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export function useSessionStorage<T>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const item = sessionStorage.getItem(key);
    if (item !== null) {
      try {
        const parsedValue = JSON.parse(item);
        setValue(parsedValue);
      } catch (e) {
        console.error(`Unable to parse value of storage item "${key}".`);
      }
    }
  }, [key]);

  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      try {
        const stringifiedValue = JSON.stringify(value);
        sessionStorage.setItem(key, stringifiedValue);
      } catch (e) {
        console.error(e);
      }
    }, 300);

    return () => clearTimeout(timeoutRef);
  }, [key, value]);

  return [value, setValue];
}
