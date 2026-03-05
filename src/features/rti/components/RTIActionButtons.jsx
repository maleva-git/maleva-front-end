import React from 'react';

const RTIActionButtons = ({ onSave, onDelete, onLoad, onView, onClear, loading, hasEditId }) => {
  return (
    <div className="flex gap-3">
      <button onClick={onView} className="px-6 py-2.5 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all shadow-md hover:shadow-lg font-medium">
        View (F5)
      </button>
      <button onClick={onSave} disabled={loading} className="px-6 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all shadow-md hover:shadow-lg font-medium disabled:opacity-50">
        {loading ? 'Saving...' : 'Save (F1)'}
      </button>
      {hasEditId && (
        <>
          <button onClick={onDelete} disabled={loading} className="px-6 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all shadow-md hover:shadow-lg font-medium disabled:opacity-50">
            Delete (F9)
          </button>
          <button onClick={onLoad} disabled={loading} className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg font-medium disabled:opacity-50">
            Load
          </button>
        </>
      )}
      <button onClick={onClear} className="px-6 py-2.5 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all shadow-md hover:shadow-lg font-medium">
        Clear (F10)
      </button>
    </div>
  );
};

export default RTIActionButtons;
