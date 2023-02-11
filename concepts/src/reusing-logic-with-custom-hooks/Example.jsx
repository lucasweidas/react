import { useEffect, useState } from 'react';

export default function Example() {
  const isOnline = useNetworkStatus();

  return (
    <div>
      <StatusBar isOnline={isOnline} />
      <SaveButton isOnline={isOnline} />
    </div>
  );
}

function StatusBar({ isOnline }) {
  return <h2>{isOnline ? '✅ Online' : '❌ Disconnected'}</h2>;
}

function SaveButton({ isOnline }) {
  return (
    <button
      disabled={!isOnline}
      onClick={() => {
        console.log('✅ Progress saved');
      }}
    >
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  );
}

function useNetworkStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function handleStatusChange() {
      setIsOnline(navigator.onLine);
    }

    window.addEventListener('online', handleStatusChange);
    window.addEventListener('offline', handleStatusChange);
    () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, [isOnline]);

  return isOnline;
}
