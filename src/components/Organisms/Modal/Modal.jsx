import { useState, createContext } from "react";
import { Footer, Header } from "../../Molecules";

// TODO: move to context file
const Context = createContext({
  isOpen: false,
  setIsOpen: () => {},
});

export const ModalContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Context.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </Context.Provider>
  );
};

export const withModalProvider = (Component) => {
  return (props) => (
    <ModalContextProvider>
      <Component {...props} />
    </ModalContextProvider>
  );
};

const useModal = () => {};

const Modal = ({ isOpen = false, children }) => {
  return (
    <dialog open={isOpen}>
      <Header />
      <div>{children}</div>
      <Footer />
    </dialog>
  );
};

export default Modal;
