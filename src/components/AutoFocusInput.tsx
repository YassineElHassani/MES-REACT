import React, { useEffect, useRef } from 'react';

type Props = React.ComponentProps<'input'> & { autoFocusDelay?: number };

export default function AutoFocusInput({ autoFocusDelay = 0, ...props }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const id = setTimeout(() => ref.current?.focus(), autoFocusDelay);
    return () => clearTimeout(id);
  }, [autoFocusDelay]);
  return <input ref={ref} {...props} className={props.className ?? 'border rounded px-3 py-2 w-full'} />;
}
