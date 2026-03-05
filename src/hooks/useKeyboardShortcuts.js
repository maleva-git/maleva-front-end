import { useEffect, useCallback } from 'react';
import { KEYBOARD_SHORTCUTS } from '../features/rti/model/constants';

export const useKeyboardShortcuts = (handlers = {}) => {
  const {
    onF1, // Save
    onF3, // Search
    onF5, // View
    onF9, // Delete
    onF10, // Clear
    onEnter,
    onDelete,
    onEscape,
    enabled = true,
  } = handlers;

  const handleKeyDown = useCallback((event) => {
    if (!enabled) return;

    const { keyCode, key } = event;

    // F1 - Save
    if (keyCode === KEYBOARD_SHORTCUTS.F1 && onF1) {
      event.preventDefault();
      onF1();
    }

    // F3 - Search
    if (keyCode === KEYBOARD_SHORTCUTS.F3 && onF3) {
      event.preventDefault();
      onF3();
    }

    // F5 - View
    if (keyCode === KEYBOARD_SHORTCUTS.F5 && onF5) {
      event.preventDefault();
      onF5();
    }

    // F9 - Delete
    if (keyCode === KEYBOARD_SHORTCUTS.F9 && onF9) {
      event.preventDefault();
      onF9();
    }

    // F10 - Clear
    if (keyCode === KEYBOARD_SHORTCUTS.F10 && onF10) {
      event.preventDefault();
      onF10();
    }

    // Enter
    if (keyCode === KEYBOARD_SHORTCUTS.ENTER && onEnter) {
      onEnter(event);
    }

    // Delete
    if (keyCode === KEYBOARD_SHORTCUTS.DELETE && onDelete) {
      onDelete(event);
    }

    // Escape
    if (keyCode === KEYBOARD_SHORTCUTS.ESC && onEscape) {
      onEscape(event);
    }
  }, [enabled, onF1, onF3, onF5, onF9, onF10, onEnter, onDelete, onEscape]);

  useEffect(() => {
    if (enabled) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enabled, handleKeyDown]);

  return { handleKeyDown };
};
