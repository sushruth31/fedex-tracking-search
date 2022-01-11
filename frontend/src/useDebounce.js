import { useEffect, useState } from "react";

export default function useDebounce(value, timer) {
  const [returnValue, setReturnValue] = useState();

  useEffect(() => {
    const handler = setTimeout(() => {
      setReturnValue(value);
    }, timer);

    return () => clearTimeout(handler);
  }, [value, timer]);

  return [returnValue];
}
