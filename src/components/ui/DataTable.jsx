import { Plus, Trash2, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const TaxLookupModal = ({ isOpen, onClose, onSelect, taxes = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setSelectedIndex(0);
    }
  }, [isOpen]);

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

  useEffect(() => {
    setSelectedIndex(0);
  }, [searchTerm]);

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
            onChange={(e) => setSearchTerm(e.target.value)}
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

const ProductLookupModal = ({ isOpen, onClose, onSelect, products = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tableRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setSelectedIndex(0);
    }
  }, [isOpen]);

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

  useEffect(() => {
    setSelectedIndex(0);
  }, [searchTerm]);

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
            onChange={(e) => setSearchTerm(e.target.value)}
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

export const DataTable = ({ columns, data, onAddRow, onDeleteRow, onCellChange, products = [], taxes = [] }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [taxModalOpen, setTaxModalOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);
  const inputRefs = useRef({});

  const handleKeyDown = (e, rowIdx, colIdx) => {
    const isLastColumn = colIdx === columns.length - 1;
    const isLastRow = rowIdx === data.length - 1;
    const editableColumns = columns.filter(col => col.editable);
    const currentColIndex = editableColumns.findIndex(col => col.field === columns[colIdx].field);
    const isLastEditableColumn = currentColIndex === editableColumns.length - 1;

    if (e.key === 'Enter') {
      e.preventDefault();
      
      // If Product Code column, open modal
      if (columns[colIdx].field === 'productCode') {
        setCurrentRow(rowIdx);
        setModalOpen(true);
        return;
      }

      // If Tax Code column, open tax modal
      if (columns[colIdx].field === 'taxCode') {
        setCurrentRow(rowIdx);
        setTaxModalOpen(true);
        return;
      }

      // If last editable column of last row, add new row
      if (isLastEditableColumn && isLastRow) {
        onAddRow();
        setTimeout(() => {
          // Focus on first editable column of new row
          const firstEditableCol = columns.findIndex(col => col.editable);
          const nextInput = inputRefs.current[`${rowIdx + 1}-${firstEditableCol}`];
          if (nextInput) nextInput.focus();
        }, 100);
      } else if (isLastEditableColumn) {
        // Move to first editable column of next row
        const firstEditableCol = columns.findIndex(col => col.editable);
        const nextInput = inputRefs.current[`${rowIdx + 1}-${firstEditableCol}`];
        if (nextInput) nextInput.focus();
      } else {
        // Move to next editable column
        let nextColIdx = colIdx + 1;
        while (nextColIdx < columns.length && !columns[nextColIdx].editable) {
          nextColIdx++;
        }
        if (nextColIdx < columns.length) {
          const nextInput = inputRefs.current[`${rowIdx}-${nextColIdx}`];
          if (nextInput) nextInput.focus();
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextInput = inputRefs.current[`${rowIdx + 1}-${colIdx}`];
      if (nextInput) nextInput.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevInput = inputRefs.current[`${rowIdx - 1}-${colIdx}`];
      if (prevInput) prevInput.focus();
    } else if (e.key === 'ArrowRight') {
      if (e.target.selectionStart === e.target.value.length) {
        e.preventDefault();
        let nextColIdx = colIdx + 1;
        while (nextColIdx < columns.length && !columns[nextColIdx].editable) {
          nextColIdx++;
        }
        if (nextColIdx < columns.length) {
          const nextInput = inputRefs.current[`${rowIdx}-${nextColIdx}`];
          if (nextInput) nextInput.focus();
        }
      }
    } else if (e.key === 'ArrowLeft') {
      if (e.target.selectionStart === 0) {
        e.preventDefault();
        let prevColIdx = colIdx - 1;
        while (prevColIdx >= 0 && !columns[prevColIdx].editable) {
          prevColIdx--;
        }
        if (prevColIdx >= 0) {
          const prevInput = inputRefs.current[`${rowIdx}-${prevColIdx}`];
          if (prevInput) prevInput.focus();
        }
      }
    }
  };

  const handleProductSelect = (product) => {
    if (currentRow !== null) {
      onCellChange(currentRow, 'productId', product.id);
      onCellChange(currentRow, 'productCode', product.productCode);
      onCellChange(currentRow, 'description', product.productName);
      onCellChange(currentRow, 'rate', product.saleRate || 0);
      onCellChange(currentRow, 'taxPercentage', 0);
    }
    setModalOpen(false);
    
    // Focus on quantity field after selection
    setTimeout(() => {
      const qtyColIdx = columns.findIndex(col => col.field === 'qty');
      const qtyInput = inputRefs.current[`${currentRow}-${qtyColIdx}`];
      if (qtyInput) qtyInput.focus();
      setCurrentRow(null);
    }, 100);
  };

  const handleTaxSelect = (tax) => {
    if (currentRow !== null) {
      onCellChange(currentRow, 'taxRefId', tax.id);
      onCellChange(currentRow, 'taxCode', tax.code);
      onCellChange(currentRow, 'taxPercentage', tax.tax || 0);
    }
    setTaxModalOpen(false);
    
    // Focus on next field after selection
    setTimeout(() => {
      const taxColIdx = columns.findIndex(col => col.field === 'taxCode');
      let nextColIdx = taxColIdx + 1;
      while (nextColIdx < columns.length && !columns[nextColIdx].editable) {
        nextColIdx++;
      }
      if (nextColIdx < columns.length) {
        const nextInput = inputRefs.current[`${currentRow}-${nextColIdx}`];
        if (nextInput) nextInput.focus();
      }
      setCurrentRow(null);
    }, 100);
  };

  return (
    <>
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                {columns.map((col, idx) => (
                  <th key={idx} className="px-2 py-2 text-left font-semibold text-gray-700 whitespace-nowrap">
                    {col.label}
                  </th>
                ))}
                <th className="px-2 py-2 text-center font-semibold text-gray-700 w-10">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIdx) => (
                <tr key={rowIdx} className="border-b border-gray-100 hover:bg-gray-50">
                  {columns.map((col, colIdx) => (
                    <td key={colIdx} className="px-2 py-2">
                      {col.editable ? (
                        col.type === 'select' ? (
                          <select
                            ref={(el) => (inputRefs.current[`${rowIdx}-${colIdx}`] = el)}
                            value={row[col.field] || ''}
                            onChange={(e) => onCellChange(rowIdx, col.field, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(e, rowIdx, colIdx)}
                            className="w-full h-7 px-2 border border-gray-300 rounded text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                          >
                            <option value="">Select</option>
                            {col.options?.map(opt => (
                              <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                          </select>
                        ) : (
                          <input
                            ref={(el) => (inputRefs.current[`${rowIdx}-${colIdx}`] = el)}
                            type={col.type || 'text'}
                            value={row[col.field] || ''}
                            onChange={(e) => onCellChange(rowIdx, col.field, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(e, rowIdx, colIdx)}
                            className="w-full h-7 px-2 border border-gray-300 rounded text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                          />
                        )
                      ) : (
                        <span className="text-gray-700">{row[col.field] || '-'}</span>
                      )}
                    </td>
                  ))}
                  <td className="px-2 py-2 text-center">
                    <button onClick={() => onDeleteRow(rowIdx)} className="text-red-500 hover:text-red-700">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ProductLookupModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setCurrentRow(null);
        }}
        onSelect={handleProductSelect}
        products={products}
      />

      <TaxLookupModal
        isOpen={taxModalOpen}
        onClose={() => {
          setTaxModalOpen(false);
          setCurrentRow(null);
        }}
        onSelect={handleTaxSelect}
        taxes={taxes}
      />
    </>
  );
};
