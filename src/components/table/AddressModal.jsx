import { useState, useEffect, useRef } from "react";

export default function AddressModal({ value, onClose, onSave }) {
    const [text, setText] = useState(value);
    const textareaRef = useRef(null);
  
    useEffect(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    }, []);

    return (
      <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
        <div className="bg-white rounded-xl w-[700px] p-6 shadow-2xl">
          <h2 className="text-lg font-semibold mb-3">Edit Address</h2>
  
          <textarea
            ref={textareaRef}
            value={text}
            onChange={e => setText(e.target.value)}
            className="w-full h-40 border rounded-lg p-3 text-sm"
          />
  
          <div className="mt-5 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-200"
            >
              Close
            </button>
  
            <button
              onClick={() => onSave(text)}
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
  