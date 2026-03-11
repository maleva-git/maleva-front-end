import { Search } from 'lucide-react';

export default function SearchInput({
  value,
  onChange,
  placeholder = 'Search...'
}) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="pl-9 pr-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
