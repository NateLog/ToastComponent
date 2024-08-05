import React from "react";
//import React, { Children } from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";

import { ToastContext } from "../ToastProvider/ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [variantSelected, setVariantSelected] = React.useState(
    VARIANT_OPTIONS[0]
  );
  const [message, setMessage] = React.useState("");
  const { sendNewMessage } = React.useContext(ToastContext);

  const textRef = React.useRef();
  React.useEffect(() => {
    textRef.current.focus();
  }, []);

  function handleNewMessage() {
    const nextId = Math.floor(1000 * Math.random());
    sendNewMessage(message, variantSelected, nextId);
    setVariantSelected("notice");
    setMessage("");
    textRef.current.focus();
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleNewMessage();
        }}
        className={styles.controlsWrapper}
      >
        <div className={styles.row}>
          <label
            htmlFor="messageBox"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="messageBox"
              ref={textRef}
              className={styles.messageInput}
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variant, index) => (
              <label htmlFor={variant} key={index}>
                <input
                  id={variant}
                  type="radio"
                  name={variant}
                  value={variant}
                  checked={variantSelected === `${variant}`}
                  onChange={(event) => {
                    setVariantSelected(event.target.value);
                  }}
                />
                {variant}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
