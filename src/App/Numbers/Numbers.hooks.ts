import {
  useRef,
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
  MutableRefObject,
} from 'react';

interface Hooks {
  width: number;
  container: MutableRefObject<HTMLDivElement | null>;
}

const useHooks = (): Hooks => {
  const [width, setWidth] = useState(0);

  const container = useRef<HTMLDivElement | null>(
    null
  );

  const handleResize = useCallback(() => {
    if (!container.current) return;
    setWidth(
      container.current.offsetWidth
    );
  }, [container]);

  useEffect(() => {
    window.addEventListener(
      'resize',
      handleResize
    );

    return () => {
      window.removeEventListener(
        'resize',
        handleResize
      );
    };
  }, [handleResize]);

  useLayoutEffect(() => {
    if (!container.current) return;
    handleResize();
  }, [container, handleResize]);

  return { width, container };
};

export default useHooks;
