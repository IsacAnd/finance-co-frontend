import styles from "../styles/toast.module.css";
import { IoIosWarning } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { useEffect, useState } from "react";

function Toast({ toastData, onClose }) {
  // Estado para controlar animação de saída
  const [exiting, setExiting] = useState(false);

  // Quando o toast deve sair, inicia a animação e depois chama onClose
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setExiting(true);
    }, 2700); // 3000ms total - um pouco antes de sumir

    const timer2 = setTimeout(() => {
      if (onClose) onClose();
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onClose]);

  return (
    <div
      className={`${styles.toastContainer} ${exiting ? styles.exit : ""}`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className={styles.message}>
        <p>{toastData.message}</p>
      </div>
      <div className={`${styles.icon}`}>
        {toastData.type === "success" && (
          <FaCheckCircle className={styles.success} />
        )}
        {toastData.type === "fail" && <FaCircleXmark className={styles.fail} />}
        {toastData.type === "warning" && (
          <IoIosWarning className={styles.warning} />
        )}
      </div>
    </div>
  );
}

export default Toast;
