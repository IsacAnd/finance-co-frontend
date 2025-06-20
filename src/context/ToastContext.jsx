import { createContext, useState } from "react";
import Toast from "../components/Toast";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toastData, setToastData] = useState({
    message: "",
    type: "",
  });

  const showToast = (message, type) => {
    setToastData({
      message,
      type,
    });

    setTimeout(() => {
      setToastData({
        message: "",
        type: "",
      });
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {toastData.message && <Toast toastData={toastData} />}
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
