import { Trash2 } from 'lucide-react';

export default function PurchaseOrderGrid({ items, products, onItemChange, onDeleteItem }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-100 border-b-2 border-gray-300">
          <tr>
            <th className="px-3 py-2 text-left font-semibold text-gray-700 w-8">#</th>
            <th className="px-3 py-2 text-left font-semibold text-gray-700">Product Code</th>
            <th className="px-3 py-2 text-left font-semibold text-gray-700">Description</th>
            <th className="px-3 py-2 text-right font-semibold text-gray-700 w-24">Quantity</th>
            <th className="px-3 py-2 text-right font-semibold text-gray-700 w-28">Rate</th>
            <th className="px-3 py-2 text-right font-semibold text-gray-700 w-24">Tax %</th>
            <th className="px-3 py-2 text-right font-semibold text-gray-700 w-28">Tax Amt</th>
            <th className="px-3 py-2 text-right font-semibold text-gray-700 w-32">Amount</th>
            <th className="px-3 py-2 text-left font-semibold text-gray-700">Serial No</th>
            <th className="px-3 py-2 text-left font-semibold text-gray-700">Remarks</th>
            <th className="px-3 py-2 text-center font-semibold text-gray-700 w-16">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr>
              <td colSpan="11" className="px-3 py-8 text-center text-gray-500">
                No items added. Click "Add Item" to start.
              </td>
            </tr>
          ) : (
            items.map((item, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-3 py-2 text-gray-600">{index + 1}</td>
                <td className="px-3 py-2">
                  <select
                    value={item.ProductRefId}
                    onChange={(e) => {
                      const product = products.find(p => p.Id === parseInt(e.target.value));
                      if (product) {
                        onItemChange(index, 'ProductRefId', product.Id);
                        onItemChange(index, 'ProductCode', product.Productcode);
                        onItemChange(index, 'ProductName', product.ProductName);
                        onItemChange(index, 'SalesRate', product.PurRate || 0);
                      }
                    }}
                    className="w-full h-8 px-2 border border-gray-300 rounded text-xs"
                  >
                    <option value="">Select</option>
                    {products.map(p => (
                      <option key={p.Id} value={p.Id}>{p.Productcode}</option>
                    ))}
                  </select>
                </td>
                <td className="px-3 py-2">
                  <input
                    type="text"
                    value={item.ProductName}
                    readOnly
                    className="w-full h-8 px-2 border border-gray-300 rounded text-xs bg-gray-50"
                  />
                </td>
                <td className="px-3 py-2">
                  <input
                    type="number"
                    value={item.Quantity}
                    onChange={(e) => onItemChange(index, 'Quantity', e.target.value)}
                    className="w-full h-8 px-2 border border-gray-300 rounded text-xs text-right"
                    step="0.01"
                  />
                </td>
                <td className="px-3 py-2">
                  <input
                    type="number"
                    value={item.SalesRate}
                    onChange={(e) => onItemChange(index, 'SalesRate', e.target.value)}
                    className="w-full h-8 px-2 border border-gray-300 rounded text-xs text-right"
                    step="0.01"
                  />
                </td>
                <td className="px-3 py-2">
                  <input
                    type="number"
                    value={item.TaxPercent}
                    onChange={(e) => onItemChange(index, 'TaxPercent', e.target.value)}
                    className="w-full h-8 px-2 border border-gray-300 rounded text-xs text-right"
                    step="0.01"
                  />
                </td>
                <td className="px-3 py-2">
                  <input
                    type="text"
                    value={item.TaxAmount}
                    readOnly
                    className="w-full h-8 px-2 border border-gray-300 rounded text-xs text-right bg-gray-50"
                  />
                </td>
                <td className="px-3 py-2">
                  <input
                    type="text"
                    value={item.Amount}
                    readOnly
                    className="w-full h-8 px-2 border border-gray-300 rounded text-xs text-right bg-gray-50 font-semibold"
                  />
                </td>
                <td className="px-3 py-2">
                  <input
                    type="text"
                    value={item.SerialNo}
                    onChange={(e) => onItemChange(index, 'SerialNo', e.target.value)}
                    className="w-full h-8 px-2 border border-gray-300 rounded text-xs"
                  />
                </td>
                <td className="px-3 py-2">
                  <input
                    type="text"
                    value={item.RemarksD}
                    onChange={(e) => onItemChange(index, 'RemarksD', e.target.value)}
                    className="w-full h-8 px-2 border border-gray-300 rounded text-xs"
                  />
                </td>
                <td className="px-3 py-2 text-center">
                  <button
                    type="button"
                    onClick={() => onDeleteItem(index)}
                    className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
