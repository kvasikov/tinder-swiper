import { breakpoints } from '../assets/breakpoints';
import { useMediaBreakpoint } from './useMediaBreakpoint';

export const useIsDesktop = () => {
  return useMediaBreakpoint(breakpoints.DESKTOP_S);
};
