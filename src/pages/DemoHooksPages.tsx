import { useRef, useState } from 'react';
import AutoFocusInput from '../components/AutoFocusInput';
import Modal from '../components/Modal';
import ImperativeInput from '../components/ImperativeInput';
import type { ImperativeInputRef } from '../components/ImperativeInput';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useDebounce } from '../hooks/useDebounce';

export default function DemoHooksPage() {
  const [open, setOpen] = useState(false);
  const impRef = useRef<ImperativeInputRef>(null);

  const [stored, setStored] = useLocalStorage<string>('mes5-note', '');
  const debouncedStored = useDebounce(stored, 400);

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">MES 5: useRef, useImperativeHandle & Custom Hooks</h1>

      <section className="space-y-3">
        <h2 className="text-lg font-medium">AutoFocus Input</h2>
        <AutoFocusInput placeholder="Auto-focus in 300ms" autoFocusDelay={300} />
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium">Imperative Input</h2>
        <div className="flex gap-2 items-center">
          <ImperativeInput ref={impRef} placeholder="Type something..." />
          <button className="px-3 py-2 bg-blue-600 text-white rounded" onClick={() => impRef.current?.focus()}>
            Focus
          </button>
          <button className="px-3 py-2 bg-gray-200 rounded" onClick={() => impRef.current?.clear()}>
            Clear
          </button>
          <button
            className="px-3 py-2 bg-gray-200 rounded"
            onClick={() => alert(`Value: ${impRef.current?.value() ?? ''}`)}
          >
            Get Value
          </button>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium">Local Storage + Debounce</h2>
        <input
          value={stored}
          onChange={e => setStored(e.target.value)}
          placeholder="Debounced save to localStorage"
          className="border rounded px-3 py-2 w-full"
        />
        <div className="text-sm text-gray-600">
          Debounced mirror: <span className="font-mono">{debouncedStored}</span>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium">Modal (focus trap + click outside)</h2>
        <button className="px-3 py-2 bg-green-600 text-white rounded" onClick={() => setOpen(true)}>
          Open Modal
        </button>
        <div className="text-black">

        <Modal open={open} onClose={() => setOpen(false)} title="Example Modal">
          <p className="text-sm text-black">Try Tab, Shift+Tab, and click outside to close.</p>
          <input className="border rounded px-3 py-2 w-full text-black" placeholder="Focusable input" />
          <button className="px-3 py-2 bg-blue-600 text-white rounded">Action</button>
        </Modal>
        </div>
      </section>
    </div>
  );
}