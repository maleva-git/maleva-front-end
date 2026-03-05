import React from 'react';

export const ConfirmDialog = ({ open, title, message, onConfirm, onCancel, confirmText = 'Confirm', cancelText = 'Cancel', confirmColor = 'red' }) => {
  if (!open) return null;

  const colorConfig = {
    red: {
      icon: 'bg-red-100',
      iconText: 'text-red-600',
      button: 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800',
      ring: 'ring-red-500/20',
    },
    blue: {
      icon: 'bg-blue-100',
      iconText: 'text-blue-600',
      button: 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800',
      ring: 'ring-blue-500/20',
    },
    green: {
      icon: 'bg-green-100',
      iconText: 'text-green-600',
      button: 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800',
      ring: 'ring-green-500/20',
    },
  };

  const config = colorConfig[confirmColor];

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-[420px] transform transition-all">
        {/* Icon */}
        <div className={`w-16 h-16 ${config.icon} rounded-full flex items-center justify-center mx-auto mb-5 ring-8 ${config.ring}`}>
          <svg className={`w-8 h-8 ${config.iconText}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        
        {/* Content */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{message}</p>
        </div>
        
        {/* Buttons */}
        <div className="flex gap-3">
          <button 
            onClick={onConfirm} 
            className={`flex-1 px-6 py-3 ${config.button} text-white rounded-xl transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]`}
          >
            {confirmText}
          </button>
          <button 
            onClick={onCancel} 
            className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-200 font-semibold transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
