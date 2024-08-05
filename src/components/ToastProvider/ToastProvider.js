import React from "react";
import ToastShelf from "../ToastShelf/ToastShelf";
import useEscape from "../../hooks/useEscapeHook";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [shelfArr, setShelfArr] = React.useState([]);

  const handleEscape = React.useCallback(() => {
    setShelfArr([]);
  }, []);

  useEscape(handleEscape);

  function sendNewMessage(message, variantSelected, id) {
    const newId = id || Math.random();
    const newMessage = {
      children: message,
      variant: variantSelected,
      id: newId,
    };
    setShelfArr(() => [...shelfArr, newMessage]);
  }

  function handleMessageDelete(id) {
    const reducedArr = shelfArr.filter((message) => {
      return message.id !== id;
    });
    setShelfArr(reducedArr);
  }

  return (
    <ToastContext.Provider
      value={{ sendNewMessage, handleMessageDelete, shelfArr }}
    >
      <ToastShelf />
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
