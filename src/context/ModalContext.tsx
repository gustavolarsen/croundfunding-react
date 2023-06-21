import { createContext, useContext, useState } from 'react';

const initialState = {
  showModal: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleModal: () => {},
};
// Context
const ModalContext = createContext(initialState);

interface ModalProviderProps {
  children: React.ReactNode;
}

// Provider
const ModalProvider = ({ children }: ModalProviderProps) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <ModalContext.Provider value={{ showModal, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider, ModalContext };
