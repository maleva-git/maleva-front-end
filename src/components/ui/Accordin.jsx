import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Accordion({
  title,
  children,
  defaultOpen = false,
  disabled = false,
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="mt-6">
      {/* Header */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen(!open)}
        className={`
          w-full flex items-center justify-between
          px-1 py-2
          text-left text-sm font-semibold text-gray-700
          border-b border-gray-200
          transition-colors
          ${disabled ? 'cursor-not-allowed opacity-60' : 'hover:text-gray-900'}
        `}
      >
        <span>{title}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-gray-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-400" />
        )}
      </button>

      {/* Body */}
      {open && (
        <div className="pt-4 pb-2">
          {children}
        </div>
      )}
    </div>
  );
}
