import { useSyncExternalStore } from 'react';

export function useBreakpoint() {
  const size = useSyncExternalStore(subscribe, getSnapshot);
  return size;
}

function subscribe(notify) {
  function handleChange({ matches, media }) {
    for (const point of Object.values(BREAKPOINT)) {
      if (media === point.media && matches) {
        notify(point.size);
        return;
      }
    }
    notify('xsmall');
  }

  for (const { media } of Object.values(BREAKPOINT)) {
    window.matchMedia(media).addEventListener('change', handleChange);
  }

  return () => {
    for (const { media } of Object.values(BREAKPOINT)) {
      window.matchMedia(media).removeEventListener('change', handleChange);
    }
  };
}

function getSnapshot(size) {
  if (size == null) {
    size = getInitialSnapshot();
  }
  return size;
}

function getInitialSnapshot() {
  const windowWidth = window.innerWidth;
  const { large } = BREAKPOINT;
  if (windowWidth >= large.width) {
    return large.size;
  }
  const { medium } = BREAKPOINT;
  if (windowWidth >= medium.width && windowWidth < large.width) {
    return medium.size;
  }
  const { small } = BREAKPOINT;
  if (windowWidth >= small.width && windowWidth < medium.width) {
    return small.size;
  }
  return 'xsmall';
}

const BREAKPOINT = {
  small: {
    size: 'small',
    media: '(min-width: 450px)',
    width: 450,
  },
  medium: {
    size: 'medium',
    media: '(min-width: 768px)',
    width: 768,
  },
  large: {
    size: 'large',
    media: '(min-width: 1024px)',
    width: 1024,
  },
};
