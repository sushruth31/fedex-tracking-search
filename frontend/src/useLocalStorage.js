import { useEffect, useState } from "react";
import areObjectsEqual from "./areObjectsEqual";

export default function useLocalStorage(key) {
  const [returnData, setReturnData] = useState(JSON.parse(localStorage.getItem(key)) || []);

  useEffect(() => {
    if (returnData.length === 0) return;
    localStorage.setItem(key, JSON.stringify(returnData));
  }, [returnData]);

  function addItem(newItem) {
    //check if item exists
    if (returnData.some(item => areObjectsEqual(item, newItem))) return;

    setReturnData(ps => [newItem, ...ps]);
  }

  const clear = () => {
    localStorage.removeItem(key);
    setReturnData([]);
  };

  return [returnData, addItem, clear];
}
