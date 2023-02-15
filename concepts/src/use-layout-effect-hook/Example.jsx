import { useLayoutEffect, useRef, useState } from 'react';

export default function Example() {
  return (
    <div style={{ position: 'relative', display: 'grid', gap: '4rem', backgroundColor: '#fff', padding: '0.5rem' }}>
      <Button tooltipContent={<span>I'm below a button</span>}>
        Hover to show the tooptip <strong>below</strong>
      </Button>
      <Button tooltipContent={<span>I'm above a button</span>}>
        Hover to show the tooptip <strong>above</strong>
      </Button>
    </div>
  );
}

function Button({ tooltipContent, children }) {
  const buttonRef = useRef();
  const [buttonRect, setButtonRect] = useState(null);

  function handlePointerEnter() {
    const { offsetParent } = buttonRef.current;
    const buttonRect = buttonRef.current.getBoundingClientRect();
    const parentRect = offsetParent.getBoundingClientRect();
    const top = buttonRect.top - parentRect.top;
    const right = buttonRect.right;
    const bottom = buttonRect.height + top;
    const left = buttonRect.left;
    setButtonRect({ top, right, bottom, left });
  }

  function handlePointerLeave() {
    setButtonRect(null);
  }

  return (
    <>
      <button ref={buttonRef} onPointerEnter={handlePointerEnter} onPointerLeave={handlePointerLeave}>
        {children}
      </button>
      {buttonRect && <Tooltip targetRect={buttonRect}>{tooltipContent}</Tooltip>}
    </>
  );
}

function Tooltip({ targetRect, children }) {
  const tooltipRef = useRef();
  const [tooltipHeight, setTooltipHeight] = useState(0);

  useLayoutEffect(() => {
    const { height } = tooltipRef.current.getBoundingClientRect();
    setTooltipHeight(height);
  }, []);

  let tooltipX = 0;
  let tooltipY = 0;
  if (targetRect) {
    tooltipX = targetRect.left;
    tooltipY = targetRect.top - tooltipHeight;
    if (targetRect.top < tooltipHeight) {
      tooltipY = targetRect.bottom;
    }
    console.log(`tooltipX: ${tooltipX}, tooltipY: ${tooltipY}`);
  }

  return (
    <div ref={tooltipRef} style={{ position: 'absolute', left: tooltipX, top: tooltipY, backgroundColor: '#000', color: '#fff' }}>
      {children}
    </div>
  );
}
