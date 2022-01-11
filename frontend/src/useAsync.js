import { useEffect, useCallback, useState } from "react";

export default function useAsync(cb, dependencies = []) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState();

  const callBackMemoized = useCallback(() => {
    setData();
    setLoading(true);

    cb()
      .then(data => setData(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, dependencies);

  useEffect(() => {
    callBackMemoized();
  }, [callBackMemoized]);

  return [data, loading, err, setData];
}
