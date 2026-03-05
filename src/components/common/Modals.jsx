import React, { useState } from 'react';
import { rtiApi } from '../../features/rti/api/rtiApi';

export const PasswordModal = ({ open, type, onClose, comid }) => {
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await rtiApi.verifyPassword(password, type, comid);
      if (response.ok) {
        onClose(true);
        setPassword('');
      } else {
        alert('Invalid Password !!!');
      }
    } catch (error) {
      alert('Invalid Password !!!');
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-96">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Enter Password</h3>
        <form onSubmit={handleSubmit}>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autoFocus className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 mb-6" placeholder="Password" />
          <div className="flex gap-3">
            <button type="submit" className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Submit
            </button>
            <button type="button" onClick={() => onClose(false)} className="flex-1 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const EmployeeLoginModal = ({ open, employees, onClose }) => {
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const employee = employees.find(emp => emp.Id === parseInt(selectedEmployee) && emp.Password === password);
    if (employee) {
      onClose(employee);
      setSelectedEmployee('');
      setPassword('');
    } else {
      alert('Invalid Password !!!');
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-96">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Employee Login</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Employee Name</label>
            <select value={selectedEmployee} onChange={(e) => setSelectedEmployee(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
              <option value="">Select Employee</option>
              {employees.map(emp => <option key={emp.Id} value={emp.Id}>{emp.AccountName}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="flex gap-3 pt-2">
            <button type="submit" className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Login
            </button>
            <button type="button" onClick={() => onClose(null)} className="flex-1 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const ConfirmModal = ({ open, message, onConfirm, onCancel }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-96">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Confirm</h3>
        <p className="text-gray-700 mb-6">{message}</p>
        <div className="flex gap-3">
          <button onClick={onConfirm} className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Yes
          </button>
          <button onClick={onCancel} className="flex-1 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium">
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export const AlertModal = ({ open, type, message, onClose }) => {
  if (!open) return null;

  const colors = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    warning: 'bg-yellow-600',
    info: 'bg-blue-600',
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-96">
        <div className={`w-16 h-16 ${colors[type]} rounded-full flex items-center justify-center mx-auto mb-4`}>
          <span className="text-white text-3xl font-bold">!</span>
        </div>
        <p className="text-gray-700 text-center mb-6">{message}</p>
        <button onClick={onClose} className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
          OK
        </button>
      </div>
    </div>
  );
};

export default { PasswordModal, EmployeeLoginModal, ConfirmModal, AlertModal };
