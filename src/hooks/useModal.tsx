import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

// Hook
export const useModal = () => {
  return useContext(ModalContext);
};
