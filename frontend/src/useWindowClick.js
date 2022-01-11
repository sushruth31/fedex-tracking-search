import { useEffect } from "react";

export default function useWindowClick(cb, ref) {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
    };

    window.addEventListener("mousedown", listener);
    return () => window.removeEventListener("mousedown", listener);
  }, [cb, ref]);
}
