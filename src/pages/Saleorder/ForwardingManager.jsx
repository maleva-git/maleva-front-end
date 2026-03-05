import { Plus, Trash2 } from 'lucide-react';
import { forwardingCodeOptions, forwardingStatusOptions } from '../../data/forwardingData';
import SearchableSelect from '../../components/common/SearchableSelect';
import toast from 'react-hot-toast';

export const ForwardingManager = ({ forwardingRows, onForwardingChange, officerOptions = [] }) => {
  // NOTE: MAXIMUM LIMIT = 3 rows only
  const MAX_ROWS = 5;
  const isAtLimit = forwardingRows.length >= MAX_ROWS;

  const addRow = () => {
    if (isAtLimit) {
      toast.error(`Maximum ${MAX_ROWS} forwarding rows reached`);
      return;
    }
    const today = new Date().toISOString().split('T')[0];
    onForwardingChange([...forwardingRows, { 
      id: Date.now(), 
      fw: '', 
      rNo: '', 
      smkNo: '', 
      sealBy: '', 
      bSealBy: '', 
      releaseNc: '', 
      fQ: '', 
      s1: '', 
      s2: '',
      createdDate: today,
      status: 'pending'
    }]);
  };

  const removeRow = (id) => {
    onForwardingChange(forwardingRows.filter(row => row.id !== id));
  };

  const updateRow = (id, field, value) => {
    onForwardingChange(forwardingRows.map(row => row.id === id ? { ...row, [field]: value } : row));
  };

  return (
    <div className="border border-gray-200 rounded-lg shadow-sm overflow-visible">
      <div className="bg-blue-600 px-3 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h4 className="text-xs font-bold text-white">Forwarding Details</h4>
          <span className="text-[10px] text-blue-100">({forwardingRows.length}/{MAX_ROWS})</span>
        </div>
        <button 
          onClick={addRow}
          disabled={isAtLimit}
          className={`px-2 py-1 rounded text-[10px] font-semibold flex items-center gap-1 ${
            isAtLimit
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
              : 'bg-white text-blue-600 hover:bg-gray-50 cursor-pointer'
          }`}
        >
          <Plus className="w-3 h-3" /> Add
        </button>
      </div>

      <div className="overflow-x-auto overflow-y-visible">
        {forwardingRows.length === 0 ? (
          <div className="text-center py-6 text-gray-400 text-[11px]">
            No forwarding rows. Click "Add" to create one
          </div>
        ) : (
          <table className="w-full border-collapse text-[11px]">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-300">
              
                <th className="border border-gray-300 px-2 py-1 text-left font-bold text-gray-700 min-w-16">Fw</th>
                <th className="border border-gray-300 px-2 py-1 text-left font-bold text-gray-700 min-w-20">R.No</th>
                <th className="border border-gray-300 px-2 py-1 text-left font-bold text-gray-700 min-w-20">Smk No</th>
                <th className="border border-gray-300 px-2 py-1 text-left font-bold text-gray-700 min-w-40">SealBy</th>
                <th className="border border-gray-300 px-2 py-1 text-left font-bold text-gray-700 min-w-40">B.SealBy</th>
                <th className="border border-gray-300 px-2 py-1 text-left font-bold text-gray-700 min-w-20">RELEASE NC</th>
                <th className="border border-gray-300 px-2 py-1 text-left font-bold text-gray-700 min-w-16">F1Q</th>
                <th className="border border-gray-300 px-2 py-1 text-left font-bold text-gray-700 min-w-14">S1</th>
                <th className="border border-gray-300 px-2 py-1 text-left font-bold text-gray-700 min-w-14">S2</th>
                <th className="border border-gray-300 px-2 py-1 text-left font-bold text-gray-700 min-w-24">Date</th>
               
                <th className="border border-gray-300 px-2 py-1 text-center font-bold text-gray-700 w-10">Action</th>
              </tr>
            </thead>
            <tbody>
              {forwardingRows.map((row) => (
                <tr key={row.id} className="border-b border-gray-200 hover:bg-blue-50">
                  
                  <td className="border border-gray-300 px-2 py-1">
                    <select
                      value={row.fw}
                      onChange={(e) => updateRow(row.id, 'fw', e.target.value)}
                      className="w-full h-7 px-2 border border-gray-300 rounded text-[10px] bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300 cursor-pointer"
                    >
                      <option value="">Select</option>
                      {forwardingCodeOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </td>
                  <td className="border border-gray-300 px-2 py-1">
                    <input
                      type="text"
                      value={row.rNo}
                      onChange={(e) => updateRow(row.id, 'rNo', e.target.value)}
                      placeholder="R.No"
                      className="w-full h-7 px-2 border border-gray-300 rounded text-[10px] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300"
                    />
                  </td>
                  <td className="border border-gray-300 px-2 py-1">
                    <input
                      type="text"
                      value={row.smkNo}
                      onChange={(e) => updateRow(row.id, 'smkNo', e.target.value)}
                      placeholder="Smk No"
                      className="w-full h-7 px-2 border border-gray-300 rounded text-[10px] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300"
                    />
                  </td>
                  <td className="border border-gray-300 px-2 py-1 relative">
                    <SearchableSelect
                      value={row.sealBy}
                      onChange={(e) => updateRow(row.id, 'sealBy', e.target.value)}
                      options={officerOptions}
                      placeholder="SealBy"
                      containerClassName=""
                    />
                  </td>
                  <td className="border border-gray-300 px-2 py-1 relative">
                    <SearchableSelect
                      value={row.bSealBy}
                      onChange={(e) => updateRow(row.id, 'bSealBy', e.target.value)}
                      options={officerOptions}
                      placeholder="B.SealBy"
                      containerClassName=""
                    />
                  </td>
                  <td className="border border-gray-300 px-2 py-1">
                    <input
                      type="text"
                      value={row.releaseNc}
                      onChange={(e) => updateRow(row.id, 'releaseNc', e.target.value)}
                      placeholder="RELEASE NC"
                      className="w-full h-7 px-2 border border-gray-300 rounded text-[10px] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300"
                    />
                  </td>
                  <td className="border border-gray-300 px-2 py-1">
                    <input
                      type="text"
                      value={row.fQ}
                      onChange={(e) => updateRow(row.id, 'fQ', e.target.value)}
                      placeholder="F1Q"
                      className="w-full h-7 px-2 border border-gray-300 rounded text-[10px] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300"
                    />
                  </td>
                  <td className="border border-gray-300 px-2 py-1">
                    <input
                      type="text"
                      value={row.s1}
                      onChange={(e) => updateRow(row.id, 's1', e.target.value)}
                      placeholder="S1"
                      className="w-full h-7 px-2 border border-gray-300 rounded text-[10px] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300"
                    />
                  </td>
                  <td className="border border-gray-300 px-2 py-1">
                    <input
                      type="text"
                      value={row.s2}
                      onChange={(e) => updateRow(row.id, 's2', e.target.value)}
                      placeholder="S2"
                      className="w-full h-7 px-2 border border-gray-300 rounded text-[10px] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300"
                    />
                  </td>
                  <td className="border border-gray-300 px-2 py-1">
                    <input
                      type="date"
                      value={row.createdDate || ''}
                      onChange={(e) => updateRow(row.id, 'createdDate', e.target.value)}
                      className="w-full h-7 px-2 border border-gray-300 rounded text-[10px] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300"
                    />
                  </td>
                 
                  <td className="border border-gray-300 px-2 py-1 text-center">
                    <button
                      onClick={() => removeRow(row.id)}
                      className="text-red-500 hover:text-red-700 inline-block"
                      title="Delete row"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {isAtLimit && (
        <div className="bg-yellow-50 border-t border-yellow-200 px-3 py-2 text-[10px] text-yellow-800 font-semibold">
          ⚠️ Maximum limit of {MAX_ROWS} rows reached. Delete a row to add more.
        </div>
      )}
    </div>
  );
};