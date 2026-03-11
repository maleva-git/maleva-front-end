import { useState, useEffect, useRef, useMemo } from 'react';
import { X, Search, MapPin, Building2 } from 'lucide-react';

export const AddressSearchModal = ({ isOpen, onClose, addresses = [], onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const searchInputRef = useRef(null);

  const filteredAddresses = useMemo(() => {
    return addresses.filter(addr =>
      addr.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      addr.address?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, addresses]);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setSelectedIndex(0);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, filteredAddresses.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && filteredAddresses[selectedIndex]) {
      e.preventDefault();
      handleSelect(filteredAddresses[selectedIndex]);
    } else if (e.key === 'Escape') {
      handleClose();
    }
  };

  const handleSelect = (address) => {
    onSelect(address.address);
    setSearchTerm('');
    setSelectedIndex(0);
    onClose();
  };

  const handleClose = () => {
    setSearchTerm('');
    setSelectedIndex(0);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={handleClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] flex flex-col border border-gray-200" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white bg-opacity-20 p-2 rounded-lg">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Select Address</h3>
              <p className="text-xs text-blue-100">Choose from saved addresses</p>
            </div>
          </div>
          <button 
            onClick={handleClose} 
            className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search */}
        <div className="p-6 bg-gray-50 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
              placeholder="Search by name or address..."
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl text-sm font-medium focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 bg-white shadow-sm"
            />
          </div>
          <div className="flex items-center justify-between mt-3">
            <p className="text-xs text-gray-500 flex items-center gap-2">
              <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs font-mono shadow-sm">↑↓</kbd>
              Navigate
              <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs font-mono shadow-sm">Enter</kbd>
              Select
              <kbd className="px-2 py-1 bg-white border border-gray-300 rounded text-xs font-mono shadow-sm">Esc</kbd>
              Close
            </p>
            <span className="text-xs font-semibold text-gray-600 bg-white px-3 py-1 rounded-full border border-gray-300">
              {filteredAddresses.length} found
            </span>
          </div>
        </div>

        {/* Address Grid */}
        <div className="flex-1 overflow-y-auto p-6 bg-white">
          {filteredAddresses.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-10 h-10 text-gray-400" />
              </div>
              <p className="text-sm font-semibold text-gray-600">No addresses found</p>
              <p className="text-xs text-gray-400 mt-1">Try adjusting your search</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-3">
              {filteredAddresses.map((addr, index) => (
                <div
                  key={addr.id}
                  onClick={() => handleSelect(addr)}
                  className={`group p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    index === selectedIndex
                      ? 'bg-blue-50 border-blue-500 shadow-lg scale-[1.02]'
                      : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${
                      index === selectedIndex ? 'bg-blue-500' : 'bg-gray-100 group-hover:bg-blue-100'
                    } transition-colors`}>
                      <Building2 className={`w-5 h-5 ${
                        index === selectedIndex ? 'text-white' : 'text-gray-600 group-hover:text-blue-600'
                      }`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-sm text-gray-900">{addr.name}</h4>
                        {index === selectedIndex && (
                          <span className="bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">SELECTED</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed whitespace-pre-line">{addr.address}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-2xl flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-gray-600">
              {filteredAddresses.length} address{filteredAddresses.length !== 1 ? 'es' : ''} available
            </span>
          </div>
          <button
            onClick={handleClose}
            className="px-5 py-2.5 bg-gray-200 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-all shadow-sm hover:shadow"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
