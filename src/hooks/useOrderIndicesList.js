import { useState, useEffect } from 'react'
import { indices } from '../utils/indices.js'

export const useOrderIndicesList = () => {
  const [filterCodes, setFilterCodes] = useState([])

  useEffect(() => {
    let newFilter = []
    /* Por cada valor (item) del array de objetos que se importa del archivo indices.js... */
    indices.map((item) => {
      /* A todos los que tengan un CPI que no esten ya guardados, se guardarán en newFilter */
      if (
        item.name === 'Consumer price index' &&
        !newFilter.includes({
          codeType: 'country',
          code: `${item.ticker}`.slice(3),
          description: `${item.country}`
        })
      ) {
        /* Se guarda el tipo de código (country o register), el código y su referencias */
        newFilter.push({
          codeType: 'country',
          code: `${item.ticker}`.slice(3),
          description: `${item.country}`
        })
      }

      if (
        item.country === 'Mexico' &&
        !newFilter.includes({
          codeType: 'register',
          code: `${item.ticker}`.slice(0, -2),
          description: `${item.name}`
        })
      ) {
        newFilter.push({
          codeType: 'register',
          code: `${item.ticker}`.slice(0, -2),
          description: `${item.name}`
        })
      }
    })
    /* Se ordena alfabeticamente el Array */
    newFilter.sort(function (a, b) {
      if (a.description > b.description) {
        return 1
      }
      if (a.description < b.description) {
        return -1
      }
      return 0
    })

    setFilterCodes(newFilter)
  }, [])

  return filterCodes
}
