import React, { useEffect, useRef } from 'react';
import { useOnClickOutside } from '../hooks/useOnClickOutside';

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export default function Modal({ open, onClose, title, children }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFocusable = useRef<HTMLButtonElement>(null);

  useOnClickOutside(panelRef, () => onClose());

  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement as HTMLElement | null;
    // focus first element when opening
    firstFocusable.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab') {
        const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables || focusables.length === 0) return;
        const list = Array.from(focusables).filter(el => !el.hasAttribute('disabled'));
        const idx = list.indexOf(document.activeElement as HTMLElement);
        if (e.shiftKey) {
          if (idx <= 0) {
            e.preventDefault();
            list[list.length - 1].focus();
          }
        } else {
          if (idx === list.length - 1) {
            e.preventDefault();
            list[0].focus();
          }
        }
      }
    }

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      prev?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" aria-modal="true" role="dialog">
      <div ref={panelRef} className="bg-white rounded shadow-lg w-full max-w-md p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">{title ?? 'Modal'}</h2>
          <button onClick={onClose} className="text-white" aria-label="Close">✕</button>
        </div>
        <div className="space-y-3">
          <button ref={firstFocusable} className="hidden">focus-anchor</button>
          {children}
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-2 border rounded text-white">Close</button>
        </div>
      </div>
    </div>
  );
}