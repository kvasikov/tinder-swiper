import { useState, useEffect, useCallback } from 'react';

const fallbackMatchMedia = (query) => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return null;
  }

  return window.matchMedia(query);
};

const omitMatchMediaResult = (matchMediaResult) => {
  if (!matchMediaResult) {
    return null;
  }

  return { media: matchMediaResult.media, matches: matchMediaResult.matches };
};

const useMedia = (query) => {
  const [result, setResult] = useState(() => omitMatchMediaResult(fallbackMatchMedia(query)));

  const callback = useCallback(
    (matchMediaResult) => setResult(omitMatchMediaResult(matchMediaResult)),
    [setResult],
  );

  useEffect(() => {
    const matchMediaResult = fallbackMatchMedia(query);
    callback(matchMediaResult);
    matchMediaResult?.addEventListener('change', callback);
    return () => {
      return matchMediaResult?.removeEventListener('change', callback);
    };
  }, [callback, query]);

  return result;
};

const useBreakpointInterval = (minWidth, maxWidth) => {
  const result = useMedia(`(min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`);
  return result?.matches || false;
};

const useMediaPredicate = (query) => {
  const result = useMedia(query);
  return (result && result.matches) || false;
};

const useMediaBreakpoint = (breakpoint, mediaType = 'min') => {
  const result = useMedia(`(${mediaType}-width: ${breakpoint}px)`);
  return (result && result.matches) || false;
};

export { useBreakpointInterval, useMediaBreakpoint, useMedia, useMediaPredicate };
