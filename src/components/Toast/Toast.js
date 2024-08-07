import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ children, variant, id }) {
  const { handleMessageDelete } = React.useContext(ToastContext);
  const Icon = ICONS_BY_VARIANT[variant];
  return (
    <li className={styles.toastWrapper}>
      <div className={`${styles.toast} ${styles[variant]}`}>
        <div className={styles.iconContainer}>
          <Icon size={24} />
        </div>
        <p className={styles.content}>
          <VisuallyHidden>{variant}</VisuallyHidden>
          {children}
        </p>
        <button
          aria-label="Dismiss message"
          aria-live="off"
          onClick={() => handleMessageDelete(id)}
          className={styles.closeButton}
        >
          <X size={24} />
          {/* <VisuallyHidden>Dismiss message</VisuallyHidden> */}
        </button>
      </div>
    </li>
  );
}

export default Toast;
