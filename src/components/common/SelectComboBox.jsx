import React from "react";

const SelectComboBox = ({
  label,
  required = false,
  value,
  onChange,
  options = [],
  containerClassName = "col-span-2 sm:col-span-2 lg:col-span-2",
  widthClass = "w-full",
  heightClass = "h-8",
  className = "",
  labelClassName = "block text-[13px] font-semibold text-gray-600 mb-1 uppercase",
}) => {
  return (
    <div className={containerClassName}>
      {label && (
        <label className={labelClassName}>
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <select
        value={value}
        onChange={onChange}
        className={`${widthClass} ${heightClass} px-3 border border-gray-300 bg-white rounded-lg text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 cursor-pointer font-medium ${className}`}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectComboBox;
