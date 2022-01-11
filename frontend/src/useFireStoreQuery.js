import { useState, useEffect } from "react";
import { getDocs } from "firebase/firestore";

export default function useFireStoreQuery(query, dependencies = [], store = [], dispatcher = () => null) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (store.length > 0) {
      setLoading(false);
      return;
    }
    getDocs(query).then((snapshot) => {
      snapshot.forEach((doc) => {
        dispatcher((prevstate) => [...prevstate, { id: doc.id, data: doc.data() }]);
      });
      setLoading(false);
    });
  }, dependencies);

  return [loading];
}
