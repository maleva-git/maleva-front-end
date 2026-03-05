import { useState, useCallback } from 'react';

export const useRTIModals = () => {
  const [passwordModal, setPasswordModal] = useState({ open: false, type: null, onSuccess: null });
  const [employeeLoginModal, setEmployeeLoginModal] = useState({ open: false, onSuccess: null });
  const [confirmModal, setConfirmModal] = useState({ open: false, message: '', resolve: null });
  const [alertModal, setAlertModal] = useState({ open: false, type: 'info', message: '' });

  // Show password modal
  const showPasswordModal = useCallback((type) => {
    return new Promise((resolve) => {
      setPasswordModal({ open: true, type, onSuccess: resolve });
    });
  }, []);

  // Open password modal (non-promise version)
  const openPasswordModal = useCallback((type, callback) => {
    setPasswordModal({ open: true, type, onSuccess: callback });
  }, []);

  // Close password modal
  const closePasswordModal = useCallback((success = false) => {
    setPasswordModal(prev => {
      if (prev.onSuccess) prev.onSuccess(success);
      return { open: false, type: null, onSuccess: null };
    });
  }, []);

  // Show employee login modal
  const showEmployeeLoginModal = useCallback(() => {
    return new Promise((resolve) => {
      setEmployeeLoginModal({ open: true, onSuccess: resolve });
    });
  }, []);

  // Close employee login modal
  const closeEmployeeLoginModal = useCallback((employee = null) => {
    setEmployeeLoginModal(prev => {
      if (prev.onSuccess) prev.onSuccess(employee);
      return { open: false, onSuccess: null };
    });
  }, []);

  // Show confirm modal
  const showConfirmModal = useCallback((message) => {
    return new Promise((resolve) => {
      setConfirmModal({ open: true, message, resolve });
    });
  }, []);

  // Close confirm modal
  const closeConfirmModal = useCallback((confirmed = false) => {
    setConfirmModal(prev => {
      if (prev.resolve) prev.resolve(confirmed);
      return { open: false, message: '', resolve: null };
    });
  }, []);

  // Show alert modal
  const showAlertModal = useCallback((type, message) => {
    setAlertModal({ open: true, type, message });
  }, []);

  // Close alert modal
  const closeAlertModal = useCallback(() => {
    setAlertModal({ open: false, type: 'info', message: '' });
  }, []);

  // Unified modal handler
  const showModal = useCallback((type, message) => {
    if (type === 'confirm') {
      return showConfirmModal(message);
    } else {
      showAlertModal(type, message);
      return Promise.resolve(true);
    }
  }, [showConfirmModal, showAlertModal]);

  return {
    passwordModal,
    showPasswordModal,
    openPasswordModal,
    closePasswordModal,
    employeeLoginModal,
    showEmployeeLoginModal,
    closeEmployeeLoginModal,
    confirmModal,
    showConfirmModal,
    closeConfirmModal,
    alertModal,
    showAlertModal,
    closeAlertModal,
    showModal,
  };
};
