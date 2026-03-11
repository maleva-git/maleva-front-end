import { X } from 'lucide-react';
import { useState } from 'react';

export const TaxLookupModal = ({ isOpen, onClose, onSelect, taxes = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredTaxes = Array.isArray(taxes) ? taxes.filter(t => {
    if (!t) return false;
    const code = String(t.code || '').toLowerCase();
    const desc = String(t.description || '').toLowerCase();
    const search = searchTerm.toLowerCase();
    return code.includes(search) || desc.includes(search);
  }) : [];

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, filteredTaxes.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredTaxes[selectedIndex]) {
        onSelect(filteredTaxes[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[70vh] flex flex-col border-2 border-green-100">
        <div className="flex items-center justify-between p-5 border-b-2 border-green-50 bg-gradient-to-r from-green-50 to-white">
          <h3 className="text-xl font-bold text-gray-800">Tax Code List</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-all">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-5 border-b border-gray-200 bg-gray-50">
          <input
            type="text"
            placeholder="🔍 Search tax code or description..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all"
            autoFocus
          />
        </div>

        <div className="flex-1 overflow-y-auto">
          {filteredTaxes.length === 0 ? (
            <div className="flex items-center justify-center p-12">
              <div className="text-gray-400 text-lg">No tax codes found</div>
            </div>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-green-600 to-green-500 text-white sticky top-0 shadow-md z-10">
                <tr>
                  <th className="px-4 py-3 text-left font-bold">Tax Code</th>
                  <th className="px-4 py-3 text-left font-bold">Description</th>
                  <th className="px-4 py-3 text-right font-bold">Tax %</th>
                </tr>
              </thead>
              <tbody>
                {filteredTaxes.map((tax, idx) => (
                  <tr
                    key={idx}
                    onClick={() => onSelect(tax)}
                    className={`border-b border-gray-100 cursor-pointer transition-all ${
                      idx === selectedIndex 
                        ? 'bg-green-100 border-l-4 border-l-green-500' 
                        : 'hover:bg-green-50'
                    }`}
                  >
                    <td className="px-4 py-3 font-semibold text-gray-700">{tax.code || ''}</td>
                    <td className="px-4 py-3 text-gray-800">{tax.description || ''}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{(tax.tax || 0).toFixed(2)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        
        <div className="p-4 border-t border-gray-200 bg-gray-50 text-center">
          <p className="text-xs text-gray-600">Total Tax Codes: <span className="font-bold text-green-600">{filteredTaxes.length}</span></p>
        </div>
      </div>
    </div>
  );
};
