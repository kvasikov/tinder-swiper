import { DATA_ATTR_PROFILE_WRAPPER_ID } from '../../constants/attributes';

export const setScrollToTopProfile = (element, callback, delay = 350) => {
  const wrapperEl = element.closest(`[${DATA_ATTR_PROFILE_WRAPPER_ID}]`);

  if (!wrapperEl?.scrollTop) {
    callback();
    return;
  }

  wrapperEl.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  setTimeout(() => {
    callback();
  }, delay);
};
