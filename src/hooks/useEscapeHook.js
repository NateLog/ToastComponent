import React from "react";

function useEscape(setStateClear) {
  React.useEffect(() => {
    function clearAll(event) {
      if (event.code === "Escape") {
        setStateClear(event);
      }
    }

    window.addEventListener("keydown", clearAll);

    return () => window.removeEventListener("keydown", clearAll);
  }, [setStateClear]);
}

export default useEscape;
