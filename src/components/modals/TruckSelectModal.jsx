import { useState, useEffect, useRef } from 'react';
import { X, Search, Truck } from 'lucide-react';

const TruckSelectModal = ({ isOpen, onClose, onSelect, trucks = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTrucks, setFilteredTrucks] = useState(trucks);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const filtered = trucks.filter(truck =>
      truck.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTrucks(filtered);
    setSelectedIndex(0);
  }, [searchTerm, trucks]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, filteredTrucks.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && filteredTrucks[selectedIndex]) {
      e.preventDefault();
      handleSelect(filteredTrucks[selectedIndex]);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleSelect = (truck) => {
    onSelect(truck);
    setSearchTerm('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-800">Select Truck</h3>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4">
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search truck..."
              className="w-full h-10 pl-10 pr-4 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="max-h-80 overflow-y-auto border border-gray-200 rounded-lg">
            {filteredTrucks.length > 0 ? (
              filteredTrucks.map((truck, index) => (
                <button
                  key={truck.id}
                  onClick={() => handleSelect(truck)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full px-4 py-3 text-left text-sm transition-colors border-b border-gray-100 last:border-b-0 ${
                    index === selectedIndex ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{truck.name}</span>
                    {truck.licenseExpired && (
                      <span className="text-xs text-red-600 font-semibold">Expired</span>
                    )}
                  </div>
                </button>
              ))
            ) : (
              <div className="px-4 py-8 text-center text-sm text-gray-500">No trucks found</div>
            )}
          </div>
        </div>

        <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 rounded-b-lg">
          <p className="text-xs text-gray-600">Use ↑↓ to navigate, Enter to select, Esc to close</p>
        </div>
      </div>
    </div>
  );
};

export default TruckSelectModal;
