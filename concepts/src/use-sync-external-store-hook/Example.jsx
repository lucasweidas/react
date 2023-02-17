import { useState } from 'react';
import { useNetworkStatus } from './networkStatus';
import { useBreakpoint } from './breakpoints';

export default function Example() {
  return (
    <div>
      <Navbar />
      <StatusBar />
      <SaveButton />
    </div>
  );
}

function Navbar() {
  const breakpoint = useBreakpoint();

  return <h2>{breakpoint} screen</h2>;
}

function StatusBar() {
  const isOnline = useNetworkStatus();
  return <p>{isOnline ? '✅ Online' : '❌ Offline'}</p>;
}

function SaveButton() {
  const isOnline = useNetworkStatus();
  const [isSaving, setIsSaving] = useState(false);

  function handleSave() {
    setTimeout(() => setIsSaving(false), 500);
    setIsSaving(true);
  }

  return (
    <>
      <button disabled={!isOnline || isSaving} onClick={handleSave}>
        {isOnline ? 'Save progress' : 'Connecting...'}
      </button>
      {isSaving && <p>Saving progress...</p>}
    </>
  );
}
