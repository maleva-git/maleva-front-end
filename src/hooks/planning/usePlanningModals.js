/**
 * Planning Modals Management Hook
 * 
 * Manages the open/close state of all modals in the Planning module.
 * Provides a clean API for modal state management.
 * 
 * @module hooks/planning/usePlanningModals
 * @example
 * const { modals, openModal, closeModal } = usePlanningModals();
 * openModal('truck');
 * closeModal('truck');
 */

import { useState, useCallback } from 'react';

export const usePlanningModals = () => {
  const [modals, setModals] = useState({
    truck: false,
    pickupAddress: false,
    deliveryAddress: false,
    updateOrder: false
  });

  /**
   * Open a specific modal
   * @param {string} modalName - Name of the modal to open
   */
  const openModal = useCallback((modalName) => {
    setModals(prev => ({ ...prev, [modalName]: true }));
  }, []);

  /**
   * Close a specific modal
   * @param {string} modalName - Name of the modal to close
   */
  const closeModal = useCallback((modalName) => {
    setModals(prev => ({ ...prev, [modalName]: false }));
  }, []);

  /**
   * Toggle a specific modal
   * @param {string} modalName - Name of the modal to toggle
   */
  const toggleModal = useCallback((modalName) => {
    setModals(prev => ({ ...prev, [modalName]: !prev[modalName] }));
  }, []);

  return {
    modals,
    openModal,
    closeModal,
    toggleModal
  };
};
