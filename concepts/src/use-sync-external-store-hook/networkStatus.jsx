import { useSyncExternalStore } from 'react';

export function useNetworkStatus() {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return isOnline;
}

function subscribe(callback) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);

  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}

function getSnapshot() {
  return navigator.onLine;
}

function getServerSnapshot() {
  return true;
}
