import { forwardRef, useImperativeHandle, useRef, useState } from 'react';

export type ImperativeInputRef = {
  focus: () => void;
  clear: () => void;
  value: () => string;
};

type Props = {
  placeholder?: string;
  className?: string;
};

const ImperativeInput = forwardRef<ImperativeInputRef, Props>(function ImperativeInput(
  { placeholder, className }: Props,
  ref
) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [val, setVal] = useState('');

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    clear: () => setVal(''),
    value: () => val,
  }));

  return (
    <input
      ref={inputRef}
      value={val}
      onChange={e => setVal(e.target.value)}
      placeholder={placeholder}
      className={className ?? 'border rounded px-3 py-2 w-full'}
    />
  );
});

export default ImperativeInput;