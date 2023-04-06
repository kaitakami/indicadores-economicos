import { useState, useEffect } from 'react'

export const useFetchTicker = (ticker) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [controller, setController] = useState(null)

  useEffect(() => {
    const URL = `https://www.econdb.com/api/series/${ticker}/?API_TOKEN=ed4c18f504bdb799ab4e0d431658ad73fe1a37f5&format=json`

    const abortController = new AbortController()
    setController(abortController)

    fetch(URL, { signal: abortController.signal })
      .then((response) => response.json())
      .then((json) => {
        const {
          data: { dates },
          ticker,
          description,
          geography,
        } = json
        const data = json.data.values.map((value, index) => ({
          date: dates[index],
          value,
        }))
        setData({
          ticker,
          description,
          geography,
          data,
        })
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          setError('Cancelled Request')
        } else {
          setError(error)
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }, [ticker])

  const handleCancelRequest = () => {
    if (controller) {
      controller.abort()
      setError('Cancelled Request')
    }
  }

  return { data, loading, error, handleCancelRequest }
}
