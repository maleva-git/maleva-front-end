import React, { useEffect, useMemo, useRef, useState } from "react";

const CustomerComboBox = ({
  label,
  required = false,
  value,
  onChange,
  options = [],
  placeholder = "Select",
  className = "",
  heightClass = "h-8",
  containerClassName = "col-span-2 sm:col-span-4 lg:col-span-3",
  endAdornment = null,
}) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const blurTimeoutRef = useRef(null);

  const selectedOption = useMemo(
    () => options.find((opt) => String(opt.value) === String(value)),
    [options, value]
  );

  useEffect(() => {
    setQuery(selectedOption?.label || "");
  }, [selectedOption]);

  useEffect(() => {
    return () => {
      if (blurTimeoutRef.current) {
        clearTimeout(blurTimeoutRef.current);
      }
    };
  }, []);

  const filteredOptions = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return options;
    return options.filter((opt) =>
      String(opt.label || "").toLowerCase().includes(term)
    );
  }, [options, query]);

  const handleInputChange = (e) => {
    const nextQuery = e.target.value;
    setQuery(nextQuery);
    setIsOpen(true);

    if (!nextQuery.trim() && onChange) {
      onChange({ target: { value: "" } });
    }
  };

  const handleSelect = (opt) => {
    setQuery(opt.label);
    setIsOpen(false);
    if (onChange) {
      onChange({ target: { value: opt.value } });
    }
  };

  const handleBlur = () => {
    blurTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setQuery(selectedOption?.label || "");
    }, 120);
  };

  const handleFocus = () => {
    if (blurTimeoutRef.current) {
      clearTimeout(blurTimeoutRef.current);
    }
    setIsOpen(true);
  };

  return (
    <div className={containerClassName}>
      {label && (
        <label className="block text-[13px] font-semibold text-gray-600 mb-1 uppercase">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className="relative">
        <input
          value={query}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          autoComplete="off"
          className={`w-full ${heightClass} ${endAdornment ? "pl-3 pr-10" : "px-3"} border border-gray-300 bg-white rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 font-medium ${className}`}
        />
        {endAdornment && (
          <div className="absolute inset-y-0 right-1 flex items-center">
            {endAdornment}
          </div>
        )}

        {isOpen && (
          <div className="absolute z-20 mt-1 w-full max-h-52 overflow-auto rounded-lg border border-gray-200 bg-white shadow-lg">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((opt) => (
                <button
                  type="button"
                  key={opt.value}
                  onMouseDown={() => handleSelect(opt)}
                  className="w-full px-3 py-2 text-left text-xs text-gray-700 hover:bg-blue-50"
                >
                  {opt.label}
                </button>
              ))
            ) : (
              <div className="px-3 py-2 text-xs text-gray-500">No matches</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerComboBox;
