import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { shelfArr } = React.useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      aria-label="Notification"
      aria-live="polite"
      role="region"
    >
      {shelfArr.map(({ children, variant, id }) => (
        <Toast variant={variant} key={id} id={id}>
          {children}
        </Toast>
      ))}
    </ol>
  );
}

export default ToastShelf;
