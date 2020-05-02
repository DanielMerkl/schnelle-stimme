import { MutableRefObject, useEffect, useRef } from 'react';

export const useIsMounted = (): MutableRefObject<boolean> => {
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return isMountedRef;
};
