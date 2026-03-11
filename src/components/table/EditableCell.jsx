import { useState } from 'react';

export default function EditableCell({ value, onChange }) {
  const [editing, setEditing] = useState(false);
  const [temp, setTemp] = useState(value);

  return editing ? (
    <input
      autoFocus
      value={temp}
      onChange={(e) => setTemp(e.target.value)}
      onBlur={() => {
        onChange(temp);
        setEditing(false);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onChange(temp);
          setEditing(false);
        }
        if (e.key === 'Escape') {
          setTemp(value);
          setEditing(false);
        }
      }}
      className="w-full border border-blue-400 rounded px-2 py-1 text-sm"
    />
  ) : (
    <span
      onClick={() => setEditing(true)}
      className="cursor-pointer px-1 rounded hover:bg-gray-100"
    >
      {value}
    </span>
  );
}
