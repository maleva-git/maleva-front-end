import { X } from 'lucide-react';
import { useState, useRef } from 'react';

export const ProductLookupModal = ({ isOpen, onClose, onSelect, products = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tableRef = useRef(null);

  const filteredProducts = Array.isArray(products) ? products.filter(p => {
    if (!p) return false;
    const desc = String(p.productName || '').toLowerCase();
    const code = String(p.productCode || '').toLowerCase();
    const search = searchTerm.toLowerCase();
    return desc.includes(search) || code.includes(search);
  }) : [];

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, filteredProducts.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredProducts[selectedIndex]) {
        onSelect(filteredProducts[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[80vh] flex flex-col border-2 border-blue-100">
        <div className="flex items-center justify-between p-5 border-b-2 border-blue-50 bg-gradient-to-r from-blue-50 to-white">
          <h3 className="text-xl font-bold text-gray-800">Product List</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-all">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-5 border-b border-gray-200 bg-gray-50">
          <input
            type="text"
            placeholder="🔍 Search product name or code..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
            autoFocus
          />
        </div>

        <div className="flex-1 overflow-y-auto overflow-x-auto" ref={tableRef}>
          {filteredProducts.length === 0 ? (
            <div className="flex items-center justify-center p-12">
              <div className="text-gray-400 text-lg">No products found</div>
            </div>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-blue-600 to-blue-500 text-white sticky top-0 shadow-md z-10">
                <tr>
                  <th className="px-4 py-3 text-left font-bold">Product Code</th>
                  <th className="px-4 py-3 text-left font-bold">Description</th>
                  <th className="px-4 py-3 text-right font-bold">MRP</th>
                  <th className="px-4 py-3 text-right font-bold">Rate</th>
                  <th className="px-4 py-3 text-right font-bold">GST %</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product, idx) => (
                  <tr
                    key={idx}
                    onClick={() => onSelect(product)}
                    className={`border-b border-gray-100 cursor-pointer transition-all ${
                      idx === selectedIndex 
                        ? 'bg-blue-100 border-l-4 border-l-blue-500' 
                        : 'hover:bg-blue-50'
                    }`}
                  >
                    <td className="px-4 py-3 font-semibold text-gray-700">{product.productCode || ''}</td>
                    <td className="px-4 py-3 text-gray-800">{product.productName || ''}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{(product.mrp || 0).toFixed(2)}</td>
                    <td className="px-4 py-3 text-right text-gray-700">{(product.saleRate || 0).toFixed(2)}</td>
                    <td className="px-4 py-3 text-right text-gray-700">0.00</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        
        <div className="p-4 border-t border-gray-200 bg-gray-50 text-center">
          <p className="text-xs text-gray-600">Total Products: <span className="font-bold text-blue-600">{filteredProducts.length}</span></p>
        </div>
      </div>
    </div>
  );
};
