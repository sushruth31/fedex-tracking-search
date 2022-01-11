import { useState } from "react";

export default function useLocalStorage(key) {
  const existingData = JSON.parse(localStorage.getItem(key));
  const [data, setData] = useState(!existingData ? [] : existingData);

  const setter = (newdata) => {
    if (!data) {
      localStorage.setItem(key, JSON.stringify(newdata));
      setData(newdata);
      return;
    }

    if (data && data.some(({ id }) => id == newdata.id)) {
      console.log("item already exists");
      return;
    }

    localStorage.setItem(key, JSON.stringify([newdata, ...data]));
    setData((ps) => [newdata, ...ps]);
  };

  const clear = () => {
    localStorage.clear();
    setData([]);
  };

  return [data.slice(0, 3), setter, clear];
}
