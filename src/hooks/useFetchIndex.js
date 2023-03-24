import { useState, useEffect } from "react";

export const useFetchIndex = (index) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [controller, setController] = useState(null)

  useEffect(() => {
    const URL = `https://www.econdb.com/api/series/${index}/?API_TOKEN=ed4c18f504bdb799ab4e0d431658ad73fe1a37f5&format=json`

    const abortController = new AbortController();
    setController(abortController);

    fetch(URL, { signal: abortController.signal })
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Cancelled request");
        } else {
          setError(error);
        }
      })
      .finally(() => setLoading(false));

  }, [index]);

  const handleCancelRequest = () => {
    if (controller) {
      controller.abort();
      setError("Cancelled Request");
    }
  };

  return { data, loading, error, handleCancelRequest };
}

