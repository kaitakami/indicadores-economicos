import fs from 'fs'

const totalPages = 503
const result = []

const waitFourSeconds = (task) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      task()
      resolve()
    }, 4000)
  })
}

async function fetchData(page) {
  try {
    console.log(`#️⃣#️⃣#️⃣ Fetching page ${page}...#️⃣#️⃣#️⃣`)
    const res = await fetch(
      `https://www.econdb.com/api/series/?token=df20133f2ff4ef68cc5b36d6f6ad463750f2a2be&page=${page}&format=json`
    )
    const json = await res.json()
    const data = json.results.map((index) => {
      const ticker = index.ticker
      console.log(`✅✅✅ Fetched ${ticker} ticker`)
      const [country, name] = index.description.split(' - ')
      return {
        ticker,
        country,
        name,
      }
    })
    result.push(...data)
  } catch (err) {
    console.log(`❌❌❌ Error fetching page ${page}: ${err} ❌❌❌`)
  }
}

;(async () => {
  for (let i = 1; i <= totalPages; i++) {
    await waitFourSeconds(() => fetchData(i))
  }

  const jsonResult = JSON.stringify(result, null, 2)
  fs.writeFileSync('./src/utils/indices.json', jsonResult)

  console.log('Data written to indices.json')
})()
